import React from 'react';

const ProcessUse = () => (
  <section>
    <div className="text-center container paddings mx-auto">
      <h1>Exemplo de renderização 3D</h1>
      <p className="text-center">
        Uma das formas de representar o uso dos núcleos de um processador e
        também de threads, seria em uma renderização 3D, onde dependendo do tipo
        de renderização, busca utilizar o máximo de um processador,
        principalmente em testes de benchmark.
      </p>
    </div>
    <iframe
      title="Process3D"
      src="https://my.spline.design/nancylookingaround-ff5e070f7fb5fbad40adbb696c2f3ed3/"
      width="100%"
      height={800}
    />
  </section>
);

export default ProcessUse;
