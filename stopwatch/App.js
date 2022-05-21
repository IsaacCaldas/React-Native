import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [time_number, setTimeNumber] = useState(0);
  const [timer, setTimer] = useState(false);
  const [interval, setIntervalPeriod] = useState(null);
  const [lap_clear, setLapClear] = useState('Lap');
  const [last_time, setLastTime] = useState(0);

  useEffect(() => {
    timer ? startTimer() : stopTimer()

    if (!timer && time_number > 0) {
      setLapClear('Clear');
    } else if (timer) {
      setLapClear('Lap');
    } else {
      setLapClear('Lap');
    }

  }, [timer]);

  const startTimer = () => {
    setIntervalPeriod(setInterval(() => {
      setTimeNumber(state => state + 0.1);
    }, 100))
  }

  const stopTimer = () => {
    setTimer(false)
    clearInterval(interval);
    setIntervalPeriod(null);
  }

  const clearLap = () => {
    setLastTime(time_number);
    setTimeNumber(0);
  }

  return (
    <View style={styles.container}>
      <View style={styles.stopwatch}>
      </View>
      <Text style={styles.timer}>{time_number.toFixed(1)}</Text>

      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.button} onPress={() => setTimer(state => !state)}>
          <Text style={styles.buttonText}>{!timer ? 'Go' : 'Stop'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => clearLap()}>
          <Text style={styles.buttonText}>{lap_clear}</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.lastTimeArea}>
        {last_time !== 0 ? <Text style={styles.lastTimeText}>Last time: <Text style={styles.lastTimeNumber}>{last_time.toFixed(1)}</Text></Text> : ''}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stopwatch: {
    backgroundColor: '#55555555',
    width: 250,
    height: 250, 
    borderWidth: 15,
    borderColor: '#ede',
    borderRadius: "50%",
  },
  timer: {
    marginTop: -160,
    color: "#ede",
    fontSize: 50,
    fontWeight: 'bold'
  },
  buttonArea: {
    flexDirection: 'row',
    marginTop: 90,
    height: 50 
  },
  button: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    margin: 17,
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222'
  },
  lastTimeArea: {
    marginTop: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lastTimeText: {
    color: '#ede',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },
  lastTimeNumber: {
    color: 'red'
  }
});
