import React from 'react'
import { Avatar, Button1, Button2, Button__Holder, Container, Content, Hero, Hero__wrapper,  Image, Modal, Over, Sub__body, Sub__head, Sub__text, Text, Text__Head, Text__span, Image1, Sub__body2, Mode   } from './Flow-css'
import { AiOutlineRight } from 'react-icons/ai'
import Repeat from './Repeat'


const Flow = ({fd, img}) => {
    return (
        <Container id="Flow">
           <Hero>
            <Hero__wrapper>
                <Image src ="logo-flow.png" />
                <Text>
                    <Text__Head>
                        Work better together with deep insights into
                     <div>your engineering workflow</div>
                    </Text__Head>
                    <Text__span>
                    Accelerate velocity and release products faster with visibility into your engineering workflow. 
                        <div>
                        Flow aggregates historical git data into easy-to-understand insights and reports to help make
                        </div>
                        <div>
                        your engineer teams more successful.
                        </div>
                    </Text__span>
                </Text>
                <Button__Holder>
                    <Button1>
                        get your skill iQ
                    </Button1>
                </Button__Holder>
            </Hero__wrapper>
          </Hero>
          <Sub__body>
          <Image1 src ="sit.png" />
              <Content>
                  <Over>overview</Over>
                  <Sub__head>
                  See your team like never 
                  <div>before</div>
                  </Sub__head>
                  <Sub__text>
                  Flow gives you unmatched visibility into your team’s workflow 
                  <div>patterns so you can identify bottlenecks, compare trends and help</div>
                  <div>your team be as effective as possible.</div>
                  </Sub__text>
                  <Button2>
                      What is flow?
                   <div><AiOutlineRight/></div>
                  </Button2>
              </Content>
          </Sub__body>
          <Repeat fd img="worklog.png"/>
          <Repeat img="review.png"/>
          <Repeat fd img="sharing.png"/>
          <Repeat img="screen.png"/>
          {/* <Avatar>
            <Modal src= "badge.png" />
            <Mode>
            Loved by startups.
             <div>Trusted by enterprises.</div>
            </Mode>
          </Avatar> */}
        </Container>
    )
}

export default Flow
