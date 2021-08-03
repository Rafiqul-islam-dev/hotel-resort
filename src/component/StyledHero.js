import styled from 'styled-components'
import defultBcg from '../images/room-1.jpeg'

const StyleHero = styled.header`
  min-height: 60vh;
  background: url(${props => (props.img? props.img:defultBcg)}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;

`
export default StyleHero;