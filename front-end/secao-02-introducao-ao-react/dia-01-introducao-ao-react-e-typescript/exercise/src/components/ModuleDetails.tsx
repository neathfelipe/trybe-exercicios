const modules = ['Fundamentos', 'Front-end', 'Back-end', 'Ciência da Computação'];

function ModuleDetails() {
  return (
    <ol>
      {modules.map((module) => <li key={ module }>{module}</li>)}
    </ol>
  );
}

export default ModuleDetails;
