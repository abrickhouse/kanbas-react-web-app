import BooleanVariables from "./BooleanVariables";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import PathParameters from "./PathParameters";
import Spread from "./Spread";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";
import WorkingWithFunctions from "./WorkingWithFunctions";
function JavaScript() {
 console.log("Hello World!");
 return (
  <div>
   <h1>JavaScript</h1>
   <VariablesAndConstants />
   <VariableTypes />
   <BooleanVariables />
   <IfElse />
   <TernaryOperator />
   <WorkingWithFunctions />
   <House />
   <Spread />
   <Destructing />
   <FunctionDestructing />
  </div>
 );
}
export default JavaScript;
