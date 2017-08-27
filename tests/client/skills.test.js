import './setup-dom'
import React from 'react'
import test from 'ava'
import { shallow, mount } from 'enzyme'
import {Provider} from 'react-redux'
import store from '../../client/store'

import Skills from '../../client/components/Skills'

test('Skills showing', t => {
  const wrapper = shallow(
    <Provider store={store}>
    <Skills />
    </Provider>
)
  t.is(wrapper.find('input').exists(), true)
})
