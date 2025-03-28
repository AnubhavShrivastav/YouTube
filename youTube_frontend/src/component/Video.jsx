
function Video() {

    const videoIds = [
        "dQw4w9WgXcQ", // Rick Astley - Never Gonna Give You Up
        "3JZ_D3ELwOQ", // Eminem - Without Me
        "L_jWHffIx5E", // Gorillaz - Feel Good Inc.
        "Zi_XLOBDo_Y", // Coldplay - Paradise
        "kJQP7kiw5Fk", // Luis Fonsi - Despacito ft. Daddy Yankee
        "9bZkp7q19f0", // PSY - GANGNAM STYLE
        "fJ9rUzIMcZQ", // Queen - Bohemian Rhapsody
        "hT_nvWreIhg", // OneRepublic - Counting Stars
        "OPf0YbXqDm0", // Mark Ronson - Uptown Funk ft. Bruno Mars
        "RgKAFK5djSk", // Wiz Khalifa - See You Again ft. Charlie Puth
        "60ItHLz5WEA", // Ed Sheeran - Shape of You
        "pRpeEdMmmQ0", // Shakira - Waka Waka (This Time for Africa)
        "oyEuk8j8imI", // Maroon 5 - Sugar
        "2Vv-BfVoq4g", // Ed Sheeran - Perfect
        "JGwWNGJdvx8", // Ed Sheeran - Shape of You (Official Video)
        "YQHsXMglC9A", // Adele - Hello
        "CevxZvSJLk8", // Katy Perry - Roar
        "ft4jcPSLJfY", // Justin Bieber - Sorry
        "k85mRPqvMbE", // The Chainsmokers - Closer ft. Halsey
        "u9Dg-g7t2l4", // Imagine Dragons - Believer
        "vUO6kYLb6As", // Passenger - Let Her Go
        "MjY2o_Py0Z4", // Taylor Swift - Blank Space
        "HCjNJDNzw8Y", // Pharrell Williams - Happy
        "hLQl3WQQoQ0", // Adele - Someone Like You
        "M11SvDtPBhA", // Taylor Swift - You Belong With Me
        "ktvTqknDobU", // Imagine Dragons - Radioactive
        "QK8mJJJvaes", // Macklemore & Ryan Lewis - Thrift Shop
        "uelHwf8o7_U", // Rihanna - Diamonds
        "pB-5XG-DbAA", // The Weeknd - Can't Feel My Face
        "YqeW9_5kURI", // Major Lazer & DJ Snake - Lean On
        "hT_nvWreIhg", // OneRepublic - Counting Stars
        "JGwWNGJdvx8", // Ed Sheeran - Shape of You
        "9bZkp7q19f0", // PSY - GANGNAM STYLE
        "RgKAFK5djSk", // Wiz Khalifa - See You Again ft. Charlie Puth
        "OPf0YbXqDm0", // Mark Ronson - Uptown Funk ft. Bruno Mars
        "fJ9rUzIMcZQ", // Queen - Bohemian Rhapsody
        "60ItHLz5WEA", // Ed Sheeran - Shape of You
        "pRpeEdMmmQ0", // Shakira - Waka Waka (This Time for Africa)
        "oyEuk8j8imI", // Maroon 5 - Sugar
        "2Vv-BfVoq4g", // Ed Sheeran - Perfect
        "JGwWNGJdvx8", // Ed Sheeran - Shape of You (Official Video)
        "YQHsXMglC9A", // Adele - Hello
        "CevxZvSJLk8", // Katy Perry - Roar
        "ft4jcPSLJfY", // Justin Bieber - Sorry
        "k85mRPqvMbE", // The Chainsmokers - Closer ft. Halsey
        "u9Dg-g7t2l4", // Imagine Dragons - Believer
        "vUO6kYLb6As", // Passenger - Let Her Go
        "MjY2o_Py0Z4", // Taylor Swift - Blank Space
        "HCjNJDNzw8Y", // Pharrell Williams - Happy
        "hLQl3WQQoQ0", // Adele - Someone Like You
      ];
      
  return (
    <div className='grid grid-cols-3 gap-2'  >
    {videoIds.map((videoId, index) => (
      <div key={index}>
        <iframe
          width="80%"
          height="300"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`YouTube Video ${index + 1}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>       
      </div>
    ))}
  </div>
)
}

export default Video