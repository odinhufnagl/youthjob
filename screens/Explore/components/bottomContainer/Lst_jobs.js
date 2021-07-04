import React from 'react'
import { View, FlatList, Text, Dimensions } from "react-native"
import { PlaceholderLine, Placeholder, Fade, Progressive, Shine } from 'rn-placeholder'
import { jobs } from '../../../../dummydata/jobs'
import fonts from '../../../../fonts'
import Card_job from './Card_job'


const Lst_jobs = ({ data, loading }) => {
    
   

    if (loading) {
        return(
            <View style={{width: Dimensions.get("screen").width, alignItems: "center"}}>

              <Placeholder
              style={{width: "90%", borderRadius: 20, elevation: 4, borderWidth: 1, borderColor: "#4688d4", backgroundColor: "white", paddingLeft: 20, paddingBottom: 10, paddingTop: 5, marginBottom: 20}}
              Animation={Fade}
              >
                  <PlaceholderLine style={{position: "absolute", top: 18, right: 18, width: 40, height: 40}}></PlaceholderLine>
                  <PlaceholderLine style={{marginTop: 18, width: "70%", height: 25, borderRadius: 10}}/>
                  <PlaceholderLine style={{width: "30%", height: 15, borderRadius: 10}}/>
                  <PlaceholderLine style={{width: "80%", height: 120, borderRadius: 10}}/>

              </Placeholder>
                    
            </View>
        )

    }

    if (data.length == 0) {
        return (
            <Text style={{fontFamily: fonts[600], fontSize: 18, marginTop: 40}}>Inget resultat</Text>
            )
    
    }

    return (
      
           
            <FlatList
            style={{width: "100%", alignItems: "center"}}
            data={data}
            renderItem={({item}) => {return <Card_job data={item}></Card_job>}}
            keyExtractor={(item, index) => 'key:'+index}
            showsVerticalScrollIndicator={false}
            
            ></FlatList>
            
    )
}

export default Lst_jobs;