import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { Button1, Button2, Button__Holder, Container, Content, Hero, Hero__wrapper, Image, Play, Right, Sub__body, Sub__head, Sub__text, Text, Text__Head, Text__span, Video } from './Assestment-css'


const Assestment = () => {
    return (
        <Container id="Assestment">
          <Hero>
            <Hero__wrapper>
                {/* <Image src ="images/background.jpg" /> */}
                <Text>
                    <Text__Head>
                     Don't guess where
                     <div>your skills stand</div>
                    </Text__Head>
                    <Text__span>
                     This is your future. Define your skills by the only metric that matches the pace of<div>
                     change. Take a free assessment to get your Skill IQ today.
                     </div>
                    </Text__span>
                </Text>
                <Button__Holder>
                    <Button1>
                        get your skill IQ
                    </Button1>
                    <Button2>
                        <Play><BsFillPlayFill/></Play>
                        This is not a test 
                        <Right><AiOutlineRight/></Right>
                    </Button2>
                </Button__Holder>
            </Hero__wrapper>
          </Hero> 
          <Sub__body>
              <Content>
                  <Sub__head>
                  Do you know what you
                  <div>don’t know?</div>
                  </Sub__head>
                  <Sub__text>
                  Identify your knowledge gaps and strengths with our skill 
                  <div>assessments. Your results will tell you where to start within a</div>
                  learning path, so you can develop the skills you need most and
                  <div> not waste time on what you already know.</div>
                  </Sub__text>
              </Content>
              <Video
              type="video/mp4" 
              loop={true}
              autoPlay={true}
              playsInline={true}
              muted
              src="skills.mp4"
              />
          </Sub__body>
        </Container>
    )
}

export default Assestment
