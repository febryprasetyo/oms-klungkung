import { useEffect, useState } from 'react';
import Parameter from './Parameter';
import mqtt from 'mqtt';

const initSpeedometer = {
  BOD: 0,
  COD: 0,
  CT: 0,
  DEPTH: 0,
  DO: 0,
  id: '',
  N: 0,
  NO2: 0,
  'NO3-3': 0,
  ORP: 0,
  PH: 0,
  Temperature: 0,
  time: '',
  TSS: 0,
  TUR: 0,
  uuid: '',
};

function Monitoring() {
  const [dataMonitoring, setDataMonitoring] = useState(initSpeedometer);
  const [dataIsLoad, setDataIsLoad] = useState(false);

  const id = '240305005225029';
  const topic = 'mqtt_ccb3aad79fe5';
  useEffect(() => {
    // Connect to the MQTT broker
    const client = mqtt.connect('ws://103.84.206.53:9001');

    // Subscribe to the MQTT topic
    client.subscribe(topic);

    // Handle incoming messages
    client.on('message', (_topic, message) => {
      // Handle the incoming message
      const jsonString = JSON.parse(message.toString());
      const uuidx = jsonString['uuid'];
      if (uuidx === id) {
        //   setUuid(id);
        setDataMonitoring(jsonString.data[jsonString.data.length - 1]);
        setDataIsLoad(true);
        console.log(id);
      }
    });

    // Cleanup on component unmount
    return () => {
      client.end(); // Close the MQTT connection
      setDataIsLoad(false);
    };
  }, [id]);

  if (!dataIsLoad) {
    return (
      <p className='text-center text-lg font-bold mt-4'>Waiting Resources...</p>
    );
  }
  return (
    <div className='flex justify-center w-full'>
      <div className='grid grid-cols-5 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-8 gap-y-8 m-4 '>
        <Parameter
          name='Temperature'
          value={dataMonitoring.Temperature.toFixed(2)}
          satuan={`\u00B0C`}
          time={dataMonitoring.time}
        />
        <Parameter
          name='DO'
          value={dataMonitoring.DO.toFixed(2)}
          satuan='mg/L'
          time={dataMonitoring.time}
        />
        <Parameter
          name='Turbidity'
          value={dataMonitoring.TUR.toFixed(2)}
          satuan='NTU'
          time={dataMonitoring.time}
        />
        <Parameter
          name='TDS'
          value={dataMonitoring.CT.toFixed(2)}
          satuan='ppm'
          time={dataMonitoring.time}
        />
        <Parameter
          name='pH'
          value={dataMonitoring.PH.toFixed(2)}
          satuan='pH'
          time={dataMonitoring.time}
        />
        <Parameter
          name='ORP'
          value={dataMonitoring.ORP.toFixed(2)}
          satuan='Mv'
          time={dataMonitoring.time}
        />
        <Parameter
          name='BOD'
          value={dataMonitoring.BOD.toFixed(2)}
          satuan='mg/L'
          time={dataMonitoring.time}
        />
        <Parameter
          name='COD'
          value={dataMonitoring.COD.toFixed(2)}
          satuan='mg/L'
          time={dataMonitoring.time}
        />
        <Parameter
          name='TSS'
          value={dataMonitoring.TSS.toFixed(2)}
          satuan='mg/L'
          time={dataMonitoring.time}
        />
        <Parameter
          name='Amonia'
          value={dataMonitoring.N.toFixed(2)}
          satuan='mg/L'
          time={dataMonitoring.time}
        />
        <Parameter
          name='Nitrat'
          value={dataMonitoring['NO3-3'].toFixed(2)}
          satuan='mg/L'
          time={dataMonitoring.time}
        />

        <Parameter
          name='Nitrit'
          value={dataMonitoring.NO2.toFixed(2)}
          satuan='mg/L'
          time={dataMonitoring.time}
        />
        <Parameter
          name='Kedalaman'
          value={dataMonitoring.DEPTH.toFixed(2)}
          satuan='M'
          time={dataMonitoring.time}
        />
      </div>
    </div>
  );
}

export default Monitoring;
