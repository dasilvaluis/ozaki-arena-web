import program from 'settings/program.json';

function Program() {
  return (
    <>
      <h6><b>Programa</b></h6>
      {program.entries
        .map((item) => <div key={item}>{item}</div>)}
    </>
  );
}

export default Program;
