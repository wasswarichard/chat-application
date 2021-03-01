import Input from "./Input";
import React, {useState} from "react";
import renderer from 'react-test-renderer';
import App from "../../App";


test('component should renders properly', () => {
    renderer.create(<App/>).getInstance();
    renderer.create(<Input message={[]} setMessage={""} sendMessage={"mock"}/>).getInstance();
});