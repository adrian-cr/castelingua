import React from 'react'
import "../../styles/components/subcomponents/FlagOrbit.css";

export default function FlagOrbit() {
  return (
    <div className="center-container">
      <img src="/images/imagotype_indigo_seethrough.png" alt="Center" className="center-image" />
      <div className="orbit-wrapper">
        <div className="orbit">
          <img src="/images/flags/argentina_flag.png"/>
          <img src="/images/flags/chile_flag.jpg"/>
          <img src="/images/flags/colombia_flag.jpg"/>
          <img src="/images/flags/mexico_flag.png"/>
          <img src="/images/flags/spain_flag.png"/>
          <img src="/images/flags/venezuela_flag.jpg"/>
        </div>
      </div>
    </div>
  );
}
