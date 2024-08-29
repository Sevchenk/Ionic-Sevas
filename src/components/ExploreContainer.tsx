import './ExploreContainer.css';
import React from 'react';
import { IonCard, 
          IonCardContent, 
          IonCardHeader, 
          IonCardSubtitle, 
          IonCardTitle } from '@ionic/react';



function ExploreContainer() {
  return (
    <IonCard>
      <img alt="calaca" src="calaca.png" />
      <IonCardHeader>
        <IonCardTitle>
          <b>GOL DE ORO</b>
        </IonCardTitle>
        <IonCardSubtitle>GOL DE ORO </IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    </IonCard>
  );
}
export default ExploreContainer;
