import React from 'react'
import Modal from 'react-modal';
import styled from 'styled-components'
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const Dp = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return (
        <div>
        <span onClick={openModal}>products</span>
        {/* <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
      
        > */}
           <Container     isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}>
            <Wrapper>
<Up>
   <Icon src="images/skill.png"/>
<Text1>Build tech skill to drive results</Text1>
<Line/>
<Text2>What is Skills?</Text2>
<Text2>View plans</Text2>
</Up>
<Line1/>
<Up>
   <Icon src="images/Flow.png"/>
<Text1>Get insights into your workflow</Text1>
<Line/>
<Text2>What is Flow?</Text2>
<Text2>View plans</Text2>
</Up>
            </Wrapper>
        </Container>
        {/* </Modal> */}
      </div>
    )
}

export default Dp
const Container = styled(Modal)`
width: 500px;
height: 200px;
display: flex;
background-color:#212121;
margin-left: 500px;
margin-top: 220px;

`
const Wrapper = styled.div`
width: 90%;
height: 85%;
display: flex;
padding: 20px;
`
const Icon = styled.img`
width: 100px;
height: 40px;
object-fit: contain;
`
const Line = styled.div`
width: 90%;
border-bottom: 1px solid white;
opacity: 0.3;
`
const Line1 = styled.div`
height: 95%;
border-left: 1px solid white;
opacity: 0.3;
`
const Up = styled.div`
width: 50%;
height: 100%;
/* padding: 10px; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`

const Text1 = styled.div`
font-size:15px;
font-weight:normal;
`
const Text2 = styled.div`
font-size:15px;
font-weight:bold;
`
