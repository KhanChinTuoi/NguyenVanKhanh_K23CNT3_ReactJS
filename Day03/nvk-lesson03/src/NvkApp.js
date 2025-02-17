import NvkClassComp from "./components/NvkClassComp";
import NvkFuncComp from "./components/NvkFuncComp";
import NvkJsxExpression from "./components/NvkJsxExpression";

function NvkApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>ReactJS Lesson03 - Nguyen Van Khanh</h1>

      <NvkJsxExpression />
      <hr/>
      {/*su dung Function Components */}
      <NvkFuncComp/>
      {/*su dung Class Components */}
      <NvkClassComp></NvkClassComp>
    </div>
  );
}

export default NvkApp;
