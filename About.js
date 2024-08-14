import image from '../images/MAN06590.JPG' //move to about section
// import imagee from '../images/MAN05714.JPG'
import React , {useState, useEffect} from 'react';
import '../../App.css';
import {Card, Text } from "@chakra-ui/react";
import FullScreen from '../FullScreen';

function About() {
  const [isntMobile, setIsntMobile] = useState(window.innerWidth >= 1300);
  useEffect(() => {
    const handleResize = () => {
      setIsntMobile(window.innerWidth >= 1300);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardstyle = {
    border: 'solid 1px #777',
    maxWidth : "1220px" ,
    width : isntMobile? "80%" :"100%" ,
    height: isntMobile ? '80vh' : '60vh',
    backgroundColor: "#b6c2dc",
    justifyContent:"center",
    margin : "0 auto",
    padding: isntMobile ? "4rem": "2rem",
    boxSizing : "border-box",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4rem'
  };

  return (
    <FullScreen display="flex" footerHeight={80} justifyContent="center" alignItems="center" backgroundColor="#ebeff3;" style ={{fontFamily: 'Times New Roman'}}>
          <Card style = {{cardstyle}}>
            <img src = {image} alt = "img" style ={{objectPosition: 'center top',maxWidth: '80%', height:'auto', display:'block', margin: '0 auto'}}/>
            <Text style ={{textAlign:'center'}}>Founder, Jie Gu</Text>
          </Card>
          <Text style = {{padding: '0 1rem', marginTop: '0', width: '80%', }} maxWidth={'100%'} textAlign={"center"}>
              <p padding='0'style={{fontSize : '1.25rem', marginBottom: '0'}}>At the Tai-Chi Club, 
                our dedication to spreading joy and wellness through group practice is paramount. 
                Free learning access to this ancient art form is offered biweekly with competition 
                standards upheld in sessions. Since the club’s inception in Spring 2023, hundreds 
                have participated the public sessions at different locations. Everyone is welcome 
                to join and learn or join and help. <br></br><br></br>
                Let’s join hands and champion our public Tai-Chi initiative: </p>
              <h2 style ={{fontSize: '1.55rem', marginBottom:'0', margin:'1rem', padding:'0'}}>
                Embarking on the Tai Chi Journey, diligence we sow <br>
                </br>Embracing in Yin and Yang’s flow, wisdom gracefully grow <br>
                </br>Flourishing group connection, friendship ever glow </h2>
              <p>
                Since November of 2023, Jie Gu has led a free, hour-long tai chi class twice a month 
                at the Main Library at Goodwood. Jie emigrated from Hubei, a province in North China, 
                about 20 years ago. After settling in Baton Rouge and earning a PhD in engineering at LSU, 
                she began a successful career as a civil engineer and contributes her success to the 
                opportunities aff orded her in our state and local community and its kind, helpful citizens. 
                She has a teenage son, Cameron, who also practices tai chi and sometimes leads the Library 
                sessions. Now, as her students near the one-year anniversary mark of exploring the yin and 
                yang of mind-body, we sat down with Jie Gu for a conversation refl ecting on her own journey 
                with tai chi and how the Library has helped her (and others) achieve their goals. “I started 
                tai chi in October of 2018,” she smiled; it was a bright, contagious smile, brimming with hope, 
                clarity, and confi dence that could not be contained. However, Jie was not always recognized 
                as the athletic type. In China, children are screened for talent and pre-selected to learn 
                tai chi. Jie was never chosen. Instead, she was selected for an enrichment program in math. 
                Years later, Jie was feeling fatigued and experiencing low energy levels from an iron 
                deficiency. This severely impacted her life. “One day, I woke up and said, ‘I want to have 
                a change.’” She ventured to her local tai chi studio and immediately became obsessed with 
                its healing benefi ts. It greatly improved her energy levels. She had tried other activities, 
                like swimming and running, but those didn’t help. “Tai chi is diff erent from other sports, 
                because there aren’t any high-impact movements. It doesn’t exhaust you at all.” You must 
                relax and connect mind and body to achieve success in tai chi. With that connection in mind, 
                Jie wanted to share this newfound “medicine” with her community. And more importantly, 
                she wanted it to be at no cost. After reaching out to the Library, Jie was able to do 
                just that. She reports 30-50 class members each session, including lots of regulars who 
                attend most, if not all, classes. There are folks of all ages, including one woman with 
                limited mobility who performs all the upper body movements from the safety of a chair. 
                Even nine months into the program, Jie is still registering new class members
                The enduring success of these classes has bled over into Jie’s personal life. 
                “I am on the highest level in this country, maybe in the world!” she exclaimed. 
                “I am going to compete, and I will prove myself because I am good at learning, and I 
                practice consistently.” Jie has earned a spot in the 4th World Taijiquan Championship, 
                taking place in Singapore this August, by placing 1st in two events at the 2024 USAWKF 
                National Team Trials and 2024 Golden State International Wushu Championships. This is the
                 equivalent of being chosen for an Olympic team – a remarkable achievement for someone 
                 who has only trained for a short period in adulthood. When asked about having a natural 
                 talent, Jie remarked dryly, “No, I have to deny that.” But for someone who freely gives 
                 so much of herself to her community and uses the Library as the conduit for her knowledge 
                 and talent, Jie deserves some credit. The East Baton Rouge Parish Library helps people like 
                 Jie follow and explore their passions and brings the community (young and old) together; 
                 the Library is an invaluable meeting place where talent/skill can be shared. The Large 
                 Meeting Room at the Main Library at Goodwood provides state of the art audio and video 
                 services, versatile seating arrangements, and serene views through vast windows of a 
                 modern jetting water fountain and live oaks. We hope to see you at the next tai chi class 
                 ready to move, relax, and reconnect body and mind.
              </p>
          </Text>
    </FullScreen>
  );
}

export default About;