import React from "react";
import AddSub from "./Components/AddSubProj/AddSub";
import EffectTutorial from "./Components/AddSubProj/effectApi/EffectTutorial";
import MemoEx from "./Components/AddSubProj/MemoExample/MemoEx";
import UsingRef from "./Components/AddSubProj/RefExample/UsingRef";
import './index.css'

const App = () => {

  return (
    <div>
      <MemoEx></MemoEx>
      <AddSub></AddSub>
      <UsingRef></UsingRef>
      <EffectTutorial></EffectTutorial>
    </div>
  )
};

export default App;
