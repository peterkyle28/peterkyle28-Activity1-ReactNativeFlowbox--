import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PP = () => {
  return (
    <View>
      <Image source={{ uri: 'https://scontent.fmnl25-4.fna.fbcdn.net/v/t39.30808-6/343481932_1288949338638353_5093901835771636852_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGbLKbn9reY8HOpUWTmB-jB0h3fVWEvsIrSHd9VYS-wisGBbdS18hL2IBWsAvVNcapCMKQY8xSO0Kg_PCnfCHoV&_nc_ohc=6STgMpbTr2UAX9PvniU&_nc_ht=scontent.fmnl25-4.fna&oh=00_AfAqm2WIbVEFcPXkWjfrrbNeXNp1b8iz4DzZGSJwaYmRyg&oe=64FB9848' }} style={styles.pp} />
    </View>
  )
};
const Profile = () => {
  const fname = 'Peter Kyle'
  const lname = 'Gingo'
  return (
    <View>
      <Text style={styles.profile}>{fname} {lname}</Text>
    </View>
  )
};
const Course = props => {
  return (
    <View>
      <Text style={styles.course}>{props.like}</Text>
    </View>
  )
};
const Subject = props => {
  return (
    <View>
      <Text style={styles.sub}>{props.subcode}</Text>
    </View>
  )
};
const SubjectDesc = props => {
  return (
    <View>
      <Text style={styles.subdesc}>{props.subdesc}</Text>
    </View>
  )
};
const Units = props => {
  return (
    <View>
      <Text style={styles.units}>Units: {props.units}</Text>
    </View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.head}>
        <PP />
        <Profile />
        <Course like="BS INFORMATION TECHNOLOGY" />
      </View>

      <Text style={styles.subtitle}>My Subjects</Text>

      <View style={styles.sublist}>
        <Subject subcode='ELEC 2' />
        <View>
          <SubjectDesc subdesc='Web Development/Web Enterprise' />
          <Units units='3' />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode='ELEC 3' />
        <View>
          <SubjectDesc subdesc='Mobile Application' />
          <Units units='3' />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode='IT 311' />
        <View>
          <SubjectDesc subdesc='Software Engineering' />
          <Units units='3' />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode='IT 312' />
        <View>
          <SubjectDesc subdesc='Web Development/Web Enterprise' />
          <Units units='3' />
        </View>
      </View>
      <View style={styles.sublist}>
        <Subject subcode='IT 313' />
        <View>
          <SubjectDesc subdesc='Quantitative Methods' />
          <Units units='3' />
        </View>
      </View>
      <Text style={styles.clickhere}>Click here to see more</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  head: {
    backgroundColor: 'gray',
    alignItems: 'left',
    justifyContent: 'center',
    height: 260,
    width: 350,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    marginTop: 40,
    marginBottom: 30,
  },
  pp: {
    marginLeft: 20,
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  profile: {
    color: 'white',
    fontSize: 30,
    marginLeft: 20
  },
  course: {
    color: 'black',
    marginLeft: 20,
  },

  subtitle: {
    marginRight: 248,
    fontSize: 20,
    marginBottom: 5
  },
  sublist: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 350,
    backgroundColor: 'gray',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginBottom: 8,
    marginTop: 8,
  },

  sub: {
    fontSize: 22,
    padding: 5,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'white'
  },
  subdesc: {
    marginLeft: 30
  },
  units: {
    marginLeft: 30
  },
  clickhere: {
    marginTop: 15,
    marginLeft: 180,
    fontSize: 16,
    marginBottom: 40,
    color: 'black'
  }
});