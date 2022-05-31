import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { FaRegComment } from 'react-icons/fa';

export default function FeedList({data}) {

  const [user, setUser] = useState(data);

  return (  
    <View style={styles.post}>
      <View style={styles.viewPerfil}>
        <Image
          source={{uri: user.perfilImage}}
          style={styles.perfilImage}
        />
        <Text style={styles.name}>{user.name} {user.verified && <GoVerified style={styles.iconVerified}/>}</Text>
      </View>
      <Image
        resizeMode="cover"
        style={styles.postImage}
        source={{uri: user.postImage}}
      />
      <View style={styles.postContent}>
        <TouchableOpacity style={styles.iconContent}>
          { user.liked ? <AiFillHeart style={styles.liked}/> : <AiOutlineHeart style={styles.noLiked}/> }
        </TouchableOpacity>
        <TouchableOpacity>
          <FaRegComment/>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../img/send.png')}
            style={styles.send}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.postComments}>
        <Text style={styles.description}>
          <Text style={styles.name}>{user.name}</Text>
          {user.description} 
          <Text style={styles.tags}>
            {user.tags.map(tag => <Text style={styles.tag} key={tag.id}>{tag.name}</Text>)}
          </Text>
        </Text>
        
      </View>

      {/* <Text>FeedList</Text>
      <Text>{data.name}</Text>
      <Text>{data.perfilImage}</Text>
      <Text>{data.publImage}</Text>
      <Text>{data.description}</Text>
      <Text>{data.tags}</Text>
      <Text>{data.liked}</Text>
      <Text>{data.likers}</Text>
      <Text>{data.comments}</Text>
      <Text>{data.verified}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 20,
  },
  viewPerfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  name: {
    fontSize: 14,
    textAlign: 'left',
    color: '#000',
    fontWeight: 'bold',
    marginRight: 5
  },
  iconVerified: {
    backgroundColor: '#53AAF0',
    color: '#53AAF0'
  },  
  perfilImage: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  postImage: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  liked: {
    color: "red",
    fontSize: 25
  },
  noLiked: {
    fontSize: 25
  },
  postContent: {
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0
  },
  iconContent: {
    marginRight: 10
  },
  postComments: {
    padding: 10
  },
  tags: {
    marginLeft: 5
  },
  tag: {
    fontSize: 15,
    marginLeft: 5,
    color: '#0F66FF',
  }
});