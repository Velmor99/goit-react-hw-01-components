import React from 'react'
import PropTypes from 'prop-types';
import {MainDiv, Desc, Avatar, Name, Tag, Location, Stats, Followers, Views, Likes, Label, Quantity} from './style-Profile'





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