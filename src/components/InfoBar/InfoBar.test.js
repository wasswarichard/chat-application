import React from 'react';
import InfoBar from "./InfoBar";
import renderer from 'react-test-renderer';

test('component should renders properly', () => {
    renderer.create(<InfoBar  room={"test"}/>).getInstance();
});