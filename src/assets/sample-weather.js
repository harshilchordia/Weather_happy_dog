// sample weather and forecast data to display something if api call fails.

export const sampleWeather =
{"coord":{"lon":-0.13,"lat":51.51},"weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],"base":"stations","main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},"visibility":10000,"wind":{"speed":4.1,"deg":80},"clouds":{"all":90},"dt":1485789600,"sys":{"type":1,"id":5091,"message":0.0103,"country":"","sunrise":1485762037,"sunset":1485794875},"id":2643743,"name":"Location not found or not supported. Please select a different location","cod":200};

export const sampleForecast = {"cod":"200","message":0,"cnt":40,"list":[{"dt":1584392400,"main":{"temp":280.68,"feels_like":276.22,"temp_min":280.68,"temp_max":281.7,"pressure":1026,"sea_level":1026,"grnd_level":1022,"humidity":47,"temp_kf":-1.02},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":49},"wind":{"speed":2.95,"deg":257},"sys":{"pod":"n"},"dt_txt":"2020-03-16 21:00:00"},{"dt":1584403200,"main":{"temp":279.43,"feels_like":275.03,"temp_min":279.43,"temp_max":280.2,"pressure":1026,"sea_level":1026,"grnd_level":1022,"humidity":58,"temp_kf":-0.77},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":50},"wind":{"speed":3.17,"deg":229},"sys":{"pod":"n"},"dt_txt":"2020-03-17 00:00:00"},{"dt":1584414000,"main":{"temp":279.17,"feels_like":274.72,"temp_min":279.17,"temp_max":279.68,"pressure":1026,"sea_level":1026,"grnd_level":1021,"humidity":71,"temp_kf":-0.51},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":47},"wind":{"speed":3.78,"deg":230},"sys":{"pod":"n"},"dt_txt":"2020-03-17 03:00:00"},{"dt":1584424800,"main":{"temp":279.4,"feels_like":274.37,"temp_min":279.4,"temp_max":279.66,"pressure":1027,"sea_level":1027,"grnd_level":1023,"humidity":64,"temp_kf":-0.26},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":62},"wind":{"speed":4.34,"deg":228},"sys":{"pod":"n"},"dt_txt":"2020-03-17 06:00:00"},{"dt":1584435600,"main":{"temp":282.3,"feels_like":276.91,"temp_min":282.3,"temp_max":282.3,"pressure":1028,"sea_level":1028,"grnd_level":1024,"humidity":60,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":75},"wind":{"speed":5.26,"deg":233},"sys":{"pod":"d"},"dt_txt":"2020-03-17 09:00:00"},{"dt":1584446400,"main":{"temp":284.2,"feels_like":279.44,"temp_min":284.2,"temp_max":284.2,"pressure":1028,"sea_level":1028,"grnd_level":1024,"humidity":60,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":88},"wind":{"speed":4.8,"deg":224},"sys":{"pod":"d"},"dt_txt":"2020-03-17 12:00:00"},{"dt":1584457200,"main":{"temp":285.92,"feels_like":281.1,"temp_min":285.92,"temp_max":285.92,"pressure":1027,"sea_level":1027,"grnd_level":1022,"humidity":57,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.13,"deg":226},"sys":{"pod":"d"},"dt_txt":"2020-03-17 15:00:00"},{"dt":1584468000,"main":{"temp":283.4,"feels_like":278.44,"temp_min":283.4,"temp_max":283.4,"pressure":1026,"sea_level":1026,"grnd_level":1022,"humidity":66,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.25,"deg":222},"sys":{"pod":"d"},"dt_txt":"2020-03-17 18:00:00"},{"dt":1584478800,"main":{"temp":281.81,"feels_like":276.92,"temp_min":281.81,"temp_max":281.81,"pressure":1027,"sea_level":1027,"grnd_level":1022,"humidity":74,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":5.18,"deg":227},"sys":{"pod":"n"},"dt_txt":"2020-03-17 21:00:00"},{"dt":1584489600,"main":{"temp":281.66,"feels_like":276.84,"temp_min":281.66,"temp_max":281.66,"pressure":1026,"sea_level":1026,"grnd_level":1022,"humidity":76,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":88},"wind":{"speed":5.15,"deg":228},"sys":{"pod":"n"},"dt_txt":"2020-03-18 00:00:00"},{"dt":1584500400,"main":{"temp":281.53,"feels_like":277.01,"temp_min":281.53,"temp_max":281.53,"pressure":1024,"sea_level":1024,"grnd_level":1021,"humidity":79,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":4.84,"deg":233},"sys":{"pod":"n"},"dt_txt":"2020-03-18 03:00:00"},{"dt":1584511200,"main":{"temp":281.2,"feels_like":276.9,"temp_min":281.2,"temp_max":281.2,"pressure":1024,"sea_level":1024,"grnd_level":1020,"humidity":84,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":98},"wind":{"speed":4.69,"deg":222},"sys":{"pod":"n"},"dt_txt":"2020-03-18 06:00:00"},{"dt":1584522000,"main":{"temp":283.72,"feels_like":279.75,"temp_min":283.72,"temp_max":283.72,"pressure":1024,"sea_level":1024,"grnd_level":1020,"humidity":76,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":82},"wind":{"speed":4.52,"deg":226},"sys":{"pod":"d"},"dt_txt":"2020-03-18 09:00:00"},{"dt":1584532800,"main":{"temp":287.7,"feels_like":283.46,"temp_min":287.7,"temp_max":287.7,"pressure":1024,"sea_level":1024,"grnd_level":1020,"humidity":64,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":5.33,"deg":228},"sys":{"pod":"d"},"dt_txt":"2020-03-18 12:00:00"},{"dt":1584543600,"main":{"temp":286.6,"feels_like":282.23,"temp_min":286.6,"temp_max":286.6,"pressure":1023,"sea_level":1023,"grnd_level":1019,"humidity":69,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":5.53,"deg":224},"sys":{"pod":"d"},"dt_txt":"2020-03-18 15:00:00"},{"dt":1584554400,"main":{"temp":285.18,"feels_like":281.26,"temp_min":285.18,"temp_max":285.18,"pressure":1023,"sea_level":1023,"grnd_level":1018,"humidity":75,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":86},"wind":{"speed":4.84,"deg":230},"sys":{"pod":"d"},"dt_txt":"2020-03-18 18:00:00"},{"dt":1584565200,"main":{"temp":283.7,"feels_like":281.47,"temp_min":283.7,"temp_max":283.7,"pressure":1025,"sea_level":1025,"grnd_level":1020,"humidity":81,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":97},"wind":{"speed":2.33,"deg":299},"sys":{"pod":"n"},"dt_txt":"2020-03-18 21:00:00"},{"dt":1584576000,"main":{"temp":280.9,"feels_like":277.22,"temp_min":280.9,"temp_max":280.9,"pressure":1025,"sea_level":1025,"grnd_level":1021,"humidity":81,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":99},"wind":{"speed":3.56,"deg":15},"rain":{"3h":0.19},"sys":{"pod":"n"},"dt_txt":"2020-03-19 00:00:00"},{"dt":1584586800,"main":{"temp":279.6,"feels_like":275.35,"temp_min":279.6,"temp_max":279.6,"pressure":1025,"sea_level":1025,"grnd_level":1021,"humidity":80,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":3.99,"deg":14},"rain":{"3h":0.56},"sys":{"pod":"n"},"dt_txt":"2020-03-19 03:00:00"},{"dt":1584597600,"main":{"temp":278.9,"feels_like":274.22,"temp_min":278.9,"temp_max":278.9,"pressure":1026,"sea_level":1026,"grnd_level":1021,"humidity":80,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":4.43,"deg":35},"rain":{"3h":0.94},"sys":{"pod":"n"},"dt_txt":"2020-03-19 06:00:00"},{"dt":1584608400,"main":{"temp":277.72,"feels_like":272.66,"temp_min":277.72,"temp_max":277.72,"pressure":1027,"sea_level":1027,"grnd_level":1023,"humidity":86,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":4.94,"deg":27},"rain":{"3h":1.5},"sys":{"pod":"d"},"dt_txt":"2020-03-19 09:00:00"},{"dt":1584619200,"main":{"temp":278.4,"feels_like":274.07,"temp_min":278.4,"temp_max":278.4,"pressure":1027,"sea_level":1027,"grnd_level":1023,"humidity":80,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":3.81,"deg":36},"rain":{"3h":0.63},"sys":{"pod":"d"},"dt_txt":"2020-03-19 12:00:00"},{"dt":1584630000,"main":{"temp":278.9,"feels_like":274.6,"temp_min":278.9,"temp_max":278.9,"pressure":1026,"sea_level":1026,"grnd_level":1022,"humidity":84,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":4.06,"deg":50},"rain":{"3h":0.81},"sys":{"pod":"d"},"dt_txt":"2020-03-19 15:00:00"},{"dt":1584640800,"main":{"temp":278.55,"feels_like":273.42,"temp_min":278.55,"temp_max":278.55,"pressure":1026,"sea_level":1026,"grnd_level":1022,"humidity":85,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":100},"wind":{"speed":5.2,"deg":50},"rain":{"3h":0.88},"sys":{"pod":"d"},"dt_txt":"2020-03-19 18:00:00"},{"dt":1584651600,"main":{"temp":277.87,"feels_like":272.22,"temp_min":277.87,"temp_max":277.87,"pressure":1028,"sea_level":1028,"grnd_level":1024,"humidity":74,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":5.34,"deg":39},"rain":{"3h":0.31},"sys":{"pod":"n"},"dt_txt":"2020-03-19 21:00:00"},{"dt":1584662400,"main":{"temp":277.07,"feels_like":272.47,"temp_min":277.07,"temp_max":277.07,"pressure":1028,"sea_level":1028,"grnd_level":1024,"humidity":80,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":3.91,"deg":40},"sys":{"pod":"n"},"dt_txt":"2020-03-20 00:00:00"},{"dt":1584673200,"main":{"temp":277.3,"feels_like":272.2,"temp_min":277.3,"temp_max":277.3,"pressure":1028,"sea_level":1028,"grnd_level":1024,"humidity":72,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":95},"wind":{"speed":4.36,"deg":40},"sys":{"pod":"n"},"dt_txt":"2020-03-20 03:00:00"},{"dt":1584684000,"main":{"temp":276.9,"feels_like":271.78,"temp_min":276.9,"temp_max":276.9,"pressure":1029,"sea_level":1029,"grnd_level":1024,"humidity":76,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":94},"wind":{"speed":4.46,"deg":29},"sys":{"pod":"n"},"dt_txt":"2020-03-20 06:00:00"},{"dt":1584694800,"main":{"temp":279.3,"feels_like":273.47,"temp_min":279.3,"temp_max":279.3,"pressure":1030,"sea_level":1030,"grnd_level":1025,"humidity":64,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":51},"wind":{"speed":5.46,"deg":45},"sys":{"pod":"d"},"dt_txt":"2020-03-20 09:00:00"},{"dt":1584705600,"main":{"temp":281.6,"feels_like":275.44,"temp_min":281.6,"temp_max":281.6,"pressure":1030,"sea_level":1030,"grnd_level":1025,"humidity":54,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":76},"wind":{"speed":5.9,"deg":53},"rain":{"3h":0.19},"sys":{"pod":"d"},"dt_txt":"2020-03-20 12:00:00"},{"dt":1584716400,"main":{"temp":281.87,"feels_like":274.99,"temp_min":281.87,"temp_max":281.87,"pressure":1030,"sea_level":1030,"grnd_level":1025,"humidity":49,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":98},"wind":{"speed":6.71,"deg":56},"rain":{"3h":0.31},"sys":{"pod":"d"},"dt_txt":"2020-03-20 15:00:00"},{"dt":1584727200,"main":{"temp":279.8,"feels_like":272.81,"temp_min":279.8,"temp_max":279.8,"pressure":1030,"sea_level":1030,"grnd_level":1026,"humidity":56,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":99},"wind":{"speed":6.85,"deg":52},"sys":{"pod":"d"},"dt_txt":"2020-03-20 18:00:00"},{"dt":1584738000,"main":{"temp":278.01,"feels_like":271.12,"temp_min":278.01,"temp_max":278.01,"pressure":1031,"sea_level":1031,"grnd_level":1027,"humidity":61,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":88},"wind":{"speed":6.61,"deg":47},"sys":{"pod":"n"},"dt_txt":"2020-03-20 21:00:00"},{"dt":1584748800,"main":{"temp":277.3,"feels_like":270.96,"temp_min":277.3,"temp_max":277.3,"pressure":1031,"sea_level":1031,"grnd_level":1027,"humidity":64,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":75},"wind":{"speed":5.82,"deg":50},"sys":{"pod":"n"},"dt_txt":"2020-03-21 00:00:00"},{"dt":1584759600,"main":{"temp":276.9,"feels_like":271.42,"temp_min":276.9,"temp_max":276.9,"pressure":1030,"sea_level":1030,"grnd_level":1025,"humidity":74,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":4.9,"deg":48},"sys":{"pod":"n"},"dt_txt":"2020-03-21 03:00:00"},{"dt":1584770400,"main":{"temp":276.78,"feels_like":271.09,"temp_min":276.78,"temp_max":276.78,"pressure":1029,"sea_level":1029,"grnd_level":1025,"humidity":74,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":2},"wind":{"speed":5.18,"deg":46},"sys":{"pod":"n"},"dt_txt":"2020-03-21 06:00:00"},{"dt":1584781200,"main":{"temp":279.8,"feels_like":273.01,"temp_min":279.8,"temp_max":279.8,"pressure":1028,"sea_level":1028,"grnd_level":1024,"humidity":52,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":67},"wind":{"speed":6.38,"deg":69},"sys":{"pod":"d"},"dt_txt":"2020-03-21 09:00:00"},{"dt":1584792000,"main":{"temp":281.7,"feels_like":273.8,"temp_min":281.7,"temp_max":281.7,"pressure":1027,"sea_level":1027,"grnd_level":1023,"humidity":40,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":33},"wind":{"speed":7.67,"deg":71},"sys":{"pod":"d"},"dt_txt":"2020-03-21 12:00:00"},{"dt":1584802800,"main":{"temp":281.3,"feels_like":273.59,"temp_min":281.3,"temp_max":281.3,"pressure":1026,"sea_level":1026,"grnd_level":1022,"humidity":46,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":7.65,"deg":70},"sys":{"pod":"d"},"dt_txt":"2020-03-21 15:00:00"},{"dt":1584813600,"main":{"temp":279.82,"feels_like":272.83,"temp_min":279.82,"temp_max":279.82,"pressure":1025,"sea_level":1025,"grnd_level":1021,"humidity":58,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":44},"wind":{"speed":6.95,"deg":63},"sys":{"pod":"d"},"dt_txt":"2020-03-21 18:00:00"}],"city":{"id":2643743,"name":"London","coord":{"lat":51.5085,"lon":-0.1257},"country":"GB","population":1000000,"timezone":0,"sunrise":1584339095,"sunset":1584381994}};

