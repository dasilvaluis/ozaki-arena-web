const mapSrc = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1391.0672154182266!2d24.189038090290392!3d45.788534469302654!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c67118ceead23%3A0x5522c54ade2958f9!2sIndependen%C8%9Ba%20SA%20-%202!5e0!3m2!1sen!2sro!4v1671050287263!5m2!1sen!2sro';

function Map() {
  return (
    <iframe
      title="Gym's Location"
      src={mapSrc}
      width="100%"
      height="400"
      style={{
        border: 0
      }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export default Map;
