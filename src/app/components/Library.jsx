import React, { useState } from 'react';

const Library = () => {
  const [newBook, setNewBook] = useState(0);
  const [oldBook, setOldBook] = useState(0);
  const [librarian, setLibrarian] = useState(2);
  const [librarianStats, setLibrarianStats] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [remainingNewBooks, setRemainingNewBooks] = useState(0);
  const [remainingOldBooks, setRemainingOldBooks] = useState(0);
  const [newBooksBorrowed, setNewBooksBorrowed] = useState(0);
  const [oldBooksReturned, setOldBooksReturned] = useState(0);

  const [librarianSpeed, setLibrarianSpeed] = useState(20);
  const [time, setTime] = useState(0);
  const [day, setDay] = useState([]);
  const testProgram = () => {
    console.log('Quantidade de Livros Alugados: ' + JSON.stringify(newBook));
    console.log('Quantidade de Livros devolvidos: ' + oldBook);
    console.log('Quantidade de Bibliotecarios: ' + librarian);
  };
  const resetProgram = () => {
    setIsRunning(false);
    setNewBook(0);
    setOldBook(0);
    setRemainingNewBooks(0);
    setNewBooksBorrowed(0);
    setOldBooksReturned(0);
    setRemainingOldBooks(0);
    setLibrarianStats([]);
  };

  const startProgram = async () => {
    if (isRunning) return;
    setLibrarian(librarian);
    setLibrarianSpeed(librarianSpeed);
    let remainingNewBooks = newBook;
    let remainingOldBooks = oldBook;
    let stats = new Array(librarian).fill(0);
    let promises = [];
    let totalTime = 0;
  
    for (let i = 0; i < librarian; i++) {
      promises.push(
        new Promise(async resolve => {
          while (remainingNewBooks > 0 || remainingOldBooks > 0) {
            stats[i]++;
            if (remainingOldBooks > 0 && remainingNewBooks > 0) {
              remainingOldBooks--;
              setRemainingOldBooks(remainingOldBooks);
              setOldBooksReturned(prevOldBooksReturned => prevOldBooksReturned + 1);
              remainingNewBooks--;
              setRemainingNewBooks(remainingNewBooks);
              setNewBooksBorrowed(prevNewBooksBorrowed => prevNewBooksBorrowed + 1);
            } else if (remainingOldBooks > 0) {
              remainingOldBooks--;
              setRemainingOldBooks(remainingOldBooks);
              setOldBooksReturned(prevOldBooksReturned => prevOldBooksReturned + 1);
            } else {
              remainingNewBooks--;
              setRemainingNewBooks(remainingNewBooks);
              setNewBooksBorrowed(prevNewBooksBorrowed => prevNewBooksBorrowed + 1);
            }
            
  
            setLibrarianStats(prevLibrarianStats => [...stats]);

            let time =
              (Math.random() * (librarianSpeed - 1) + librarianSpeed) * 10;
  
            await new Promise(resolve =>
              setTimeout(
                resolve,
                time,
                (totalTime += time),
                setTime(totalTime),
              ),
            );
          }
          resolve();
        }),
      );
    }
    await Promise.all(promises);
    setDay(prevDay => [
      ...prevDay,
      {
        newBooks: newBook,
        oldBooks: oldBook,
        librarians: librarian,
        time: Math.floor(totalTime),
      },
    ]);
    setLibrarianStats(stats);
    setNewBook(remainingNewBooks > 0 ? remainingNewBooks : 0);
    setOldBook(remainingOldBooks > 0 ? remainingOldBooks : 0);
  };
  

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <button
        onClick={startProgram}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Iniciar
      </button>
      <button
        onClick={resetProgram}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Resetar
      </button>
      <div className="flex flex-wrap space-x-4 mb-4">
        <div className="border">
          <h3 className="text-lg text-center font-bold">
            Livros Novos Restantes:
          </h3>
          <p className="text-center">{newBooksBorrowed}</p>
        </div>
        <div className="border">
          <h3 className="text-lg text-center font-bold">
            Livros Antigos Restantes:
          </h3>
          <p className="text-center">{oldBooksReturned}</p>
        </div>
        <div className="border">
          <h3 className="text-lg text-center font-bold">Livros Novos:</h3>
          <p className="text-center">{newBook}</p>
        </div>
        <div className="border">
          <h3 className="text-lg text-center font-bold">Livros Antigos:</h3>
          <p className="text-center">{oldBook}</p>
        </div>
      </div>
      <div className="mb-4">
        <label className="block  font-bold mb-2">
          <h4> livros novos:</h4>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={+newBook}
          onChange={e => setNewBook(+e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block  font-bold mb-2">
          <h4> livros antigos:</h4>
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          value={+oldBook}
          onChange={e => setOldBook(+e.target.value)}
        />
      </div>
      <table className="table-auto border-collapse border border-gray-800">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-800 bg-gray-100">
              Bibliotecário
            </th>
            <th className="px-4 py-2 border border-gray-800 bg-gray-100">
              Clientes
            </th>
          </tr>
        </thead>
        <tbody>
          {librarianStats.map((stat, index) => (
            <tr key={index}>
              <td className="border border-gray-800 px-4 py-2 text-center">
                Bibliotecário {index + 1}
              </td>
              <td className="border border-gray-800 px-4 py-2 text-center">
                {stat}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Library;
