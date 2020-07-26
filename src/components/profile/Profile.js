import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const MainDiv = styled.div`
border-radius: 3px;
padding-top: 31px;
width: 250px;
box-shadow: 1px 1px 3px black;
margin: auto;
`;

const Desc = styled.div`
display: flex;
flex-direction: column;
`;

const Avatar = styled.img`
width: 100px;
height: 100px;
border-radius: 60px;
margin-bottom: 29px;
margin-right: auto;
margin-left: auto;
display: block;
`;

const Name = styled.p`
color: #122236;
font-weight: bold;
font-size: 18px;
margin-right: auto;
margin-left: auto;
margin-bottom: 11px;
`;

const Tag = styled.p`
margin-right: auto;
margin-left: auto;
color: #adb6c0;
font-size: 14px;
margin-bottom: 11px;
`;

const Location = styled.p`
margin-right: auto;
margin-left: auto;
color: #adb6c0;
font-size: 14px;
margin-bottom: 30px;
`;

const Stats = styled.ul`
display: flex;
margin-bottom: 20px;
`;

const Followers = styled.li`
width: 85px;
height: 75px;
display: flex;
flex-direction: column;
background-color: #f3f6f9;
border: 1px solid #cad5e3;
`;

const Views = styled.li`
width: 85px;
height: 75px;
display: flex;
flex-direction: column;
background-color: #f3f6f9;
border: 1px solid #cad5e3;
`;

const Likes = styled.li`
width: 85px;
height: 75px;
display: flex;
flex-direction: column;
background-color: #f3f6f9;
border: 1px solid #cad5e3;
`;

const Label = styled.span`
color: #97a4b0;
font-size: 12px;
margin-right: auto;
margin-left: auto;
padding-top: 20px;
`;

const Quantity = styled.span`
color: #1f3349;
font-weight: bold;
font-size: 14px;
margin-right: auto;
margin-left: auto;
`;



export default function Profile ({avatar, name, tag, location, follovers, views, likes,}) {
    return (
        <MainDiv>
  <Desc>
    <Avatar
      src={avatar}
      alt={"user avatar"}
    />
    <Name>{name}</Name>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Desc>

  <Stats>
    <Followers>
      <Label>Followers</Label>
    <Quantity>{follovers}</Quantity>
    </Followers>
    <Views>
      <Label>Views</Label>
    <Quantity>{views}</Quantity>
    </Views>
    <Likes>
      <Label>Likes</Label>
    <Quantity>{likes}</Quantity>
    </Likes>
  </Stats>
</MainDiv> 
    )
}


Profile.propTypes = {
   avatar: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   tag: PropTypes.string.isRequired,
   location: PropTypes.string.isRequired,
   follovers: PropTypes.number.isRequired,
   views: PropTypes.number.isRequired,
   likes: PropTypes.number.isRequired
}