# CountdownTimer
end date clock

its simple timer we can show how many left to finish
how to use
### Documentation
 ### use npm 
npm i react-native-countdownenddate
 ### use yarn
 yarn add react-native-countdownenddate
  ### snack 
  ### https://snack.expo.dev/@annveeadmin/shallow-juice-box
 
import {CountdownTimer,BetweendownTimer} from 'react-native-countdownenddate';

        <CountdownTimer endDateString="2023-09-10" />
        
           <BetweendownTimer
          startDateString={'2023-10-11T08:06:00Z'}
          endDateString={'2023-10-12T12:00:00Z'}
        />
# you can add style text 
        
### styleContainer  example
        
        styleContainer={{color: "#000",marginHorizontal: 10,}}
              
              
              
    <CountdownTimer endDateString="2023-10-10"styleContainer={styles.yourstyle} />
                
          <BetweendownTimer
          startDateString={'2023-10-11T08:06:00Z'}
          endDateString={'2023-10-12T12:00:00Z'}
          styleContainer={styles.yourstyle}
        />         
               
