import Title from './Title';
import ModuleDetails from './ModuleDetails';
import { calculateAge } from '../utils/age';

function HelloWorld() {
  return (
    <div>
      <Title />
      <ModuleDetails />
      {calculateAge('18/02/1996')}
    </div>
  );
}

export default HelloWorld;
