import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { GoVerified } from 'react-icons/go';
import { FaRegComment } from 'react-icons/fa';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

export default function FeedList({data}) {

  const [post, setPost] = useState(data);

  const like = () => setPost({...post, liked: !post.liked});

  return (  
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.viewPerfil}>
          <Image
            source={{uri: post.perfilImage}}
            style={styles.perfilImage}
          />
          <Text style={styles.nameTitle}>
            <Text style={styles.name}>{post.name}</Text>
            {post.verified && <GoVerified style={{ backgroundColor: '#fff', color: '#34aFF2' }}/>}
          </Text>
        </View>
        <BiDotsHorizontalRounded style={{ fontSize: 20 }}/>
      </View>
      <Image
        resizeMode="cover"
        style={styles.postImage}
        source={{uri: post.postImage}}
      />
      <View style={styles.postContent}>
        <TouchableOpacity style={styles.iconContent} onPress={() => like()}>
          { post.liked ? <AiFillHeart style={{ color: 'red', fontSize: 30 }}/> : <AiOutlineHeart style={{ fontSize: 30 }}/> }
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContent}>
          <FaRegComment style={{ fontSize: 25 }}/>
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
          <Text style={styles.name}>{post.name}</Text>
          {post.description} 
          <Text style={styles.tags}>
            {post.tags.map(tag => <Text style={styles.tag} key={tag.id}>{tag.name}</Text>)}
          </Text>
        </Text>
        <TouchableOpacity>
          <Text style={styles.comments}>View all {post.comments} comments</Text>
        </TouchableOpacity>
        <Text style={styles.date}>{post.date}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 5,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8
  },
  viewPerfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameTitle: {
    marginLeft: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 14,
    textAlign: 'left',
    color: '#000',
    fontWeight: 'bold',
    marginRight: 5
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
  postContent: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginBottom: 0
  },
  send: {
    width: 35,
    height: 35
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
  },
  comments: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 5
  }, 
  date: {
    fontSize: 13,
    color: '#ccc',
    marginTop: 1
  }
});