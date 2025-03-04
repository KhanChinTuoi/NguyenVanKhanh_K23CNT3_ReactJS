import React from 'react'
import NvkLoginComp from './NvkLoginComp';
import NvkLogoutComp from './NvkLogoutComp';

export default function NvkLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var NvkLoginControl = isLoggedIn?<NvkLoginComp />: <NvkLogoutComp />;
  return (
    <div>
      {NvkLoginControl}
    </div>
  )
}