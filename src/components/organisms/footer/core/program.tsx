import program from 'settings/program.json';

function Program() {
  return (
    <div>
      <h6><b>Programa</b></h6>
      {program.entries
        .map((item) => <div key={item}>{item}</div>)}
    </div>
  );
}

export default Program;
