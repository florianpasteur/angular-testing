export interface DropOffPoint {
  id: number
  lat: number
  lng: number
  locationtype_id: number
  icon_path: string
  location_code: string
  location_name: string
  street: string
  city: string
  house_number: string
  house_number_add: string
  criteria: any[]
  distance: number
  shop: string
  collection: string
  openingHours: OpeningHours
}


export interface OpeningHours {
  monday:  {'from': number, 'to': number}[],
  tuesday:  {'from': number, 'to': number}[],
  wednesday:  {'from': number, 'to': number}[],
  thursday:  {'from': number, 'to': number}[],
  friday:  {'from': number, 'to': number}[],
  saturday:  {'from': number, 'to': number}[],
  sunday:  {'from': number, 'to': number}[],
}

export const locations: DropOffPoint[] = [{
  'id': 59107998,
  'lat': 52.37960707,
  'lng': 4.89334126,
  'locationtype_id': 404,
  'icon_path': 'images/icon_pakketpunt en pakketautomaat.png',
  'location_code': '38730214946',
  'location_name': 'Bestseller Haarlemmerstraat',
  'street': 'Haarlemmerstraat',
  'city': 'Amsterdam',
  'house_number': '41',
  'house_number_add': '',
  'criteria': [],
  'distance': 236,
  'shop': '09.00-19.00',
  'collection': '18:00',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59107409,
  'lat': 52.37854931,
  'lng': 4.89617282,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH1040',
  'location_name': 'Albert Heijn',
  'street': 'Prins Hendrikkade',
  'city': 'AMSTERDAM',
  'house_number': '20',
  'house_number_add': '',
  'criteria': [],
  'distance': 245,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59112747,
  'lat': 52.37957883,
  'lng': 4.89953937,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10579217',
  'location_name': 'Ako',
  'street': 'Stationsplein',
  'city': 'Amsterdam',
  'house_number': '45',
  'house_number_add': 'G',
  'criteria': [],
  'distance': 257,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59107414,
  'lat': 52.37923604,
  'lng': 4.89923472,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH5868',
  'location_name': 'Albert Heijn',
  'street': 'Stationsplein',
  'city': 'AMSTERDAM',
  'house_number': '45',
  'house_number_add': '',
  'criteria': [],
  'distance': 262,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59108773,
  'lat': 52.37812934,
  'lng': 4.89676492,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10580093',
  'location_name': 'Marina Souvenir Supermarkt',
  'street': 'Prins Hendrikkade',
  'city': 'Amsterdam',
  'house_number': '24',
  'house_number_add': '',
  'criteria': [],
  'distance': 294,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 25200, 'to': 57600}],
    'tuesday': [{'from': 25200, 'to': 57600}],
    'wednesday': [{'from': 28800, 'to': 61200}],
    'thursday': [{'from': 32400, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 57600}],
    'saturday': [{'from': 28800, 'to': 64800}],
    'sunday': [{'from': 28800, 'to': 57600}],
  },
}, {
  'id': 59119721,
  'lat': 52.38026563,
  'lng': 4.89177711,
  'locationtype_id': 4,
  'icon_path': 'images/icon_brievenbus.png',
  'location_code': 'BBN_178981',
  'location_name': 'Haarlemmerstraat',
  'street': 'Haarlemmerstraat',
  'city': 'Amsterdam',
  'house_number': '75',
  'house_number_add': '',
  'criteria': [],
  'distance': 310,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 64800}],
    'tuesday': [{'from': 28800, 'to': 64800}],
    'wednesday': [{'from': 28800, 'to': 64800}],
    'thursday': [{'from': 32400, 'to': 64800}],
    'friday': [{'from': 28800, 'to': 61200}],
    'saturday': [{'from': 32400, 'to': 57600}],
    'sunday': [{'from': 32400, 'to': 61200}],
  },
}, {
  'id': 59109154,
  'lat': 52.38050669,
  'lng': 4.89139255,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10579968',
  'location_name': 'Sigarenmagazijn Tito',
  'street': 'Haarlemmerstraat',
  'city': 'Amsterdam',
  'house_number': '96',
  'house_number_add': '',
  'criteria': [],
  'distance': 332,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59112745,
  'lat': 52.37887137,
  'lng': 4.90016398,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10579215',
  'location_name': 'Ako',
  'street': 'Stationsplein',
  'city': 'Amsterdam',
  'house_number': '39',
  'house_number_add': 'D',
  'criteria': [],
  'distance': 336,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59112746,
  'lat': 52.37869175,
  'lng': 4.90019533,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10579216',
  'location_name': 'Ako',
  'street': 'Stationsplein',
  'city': 'Amsterdam',
  'house_number': '37',
  'house_number_add': 'A',
  'criteria': [],
  'distance': 351,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59107416,
  'lat': 52.379405,
  'lng': 4.90098057,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH5870',
  'location_name': 'Albert Heijn',
  'street': 'De Ruijterkade',
  'city': 'AMSTERDAM',
  'house_number': '24',
  'house_number_add': '',
  'criteria': [],
  'distance': 352,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59107776,
  'lat': 52.37933401,
  'lng': 4.90120165,
  'locationtype_id': 2,
  'icon_path': 'images/icon_postkantoor.png',
  'location_code': '16793176188',
  'location_name': 'Service Point Amsterdam CS',
  'street': 'De Ruijterkade',
  'city': 'Amsterdam',
  'house_number': '26',
  'house_number_add': 'B',
  'criteria': [],
  'distance': 369,
  'shop': '07.00-22.00',
  'collection': '19:00',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59119707,
  'lat': 52.37844011,
  'lng': 4.90019809,
  'locationtype_id': 4,
  'icon_path': 'images/icon_brievenbus.png',
  'location_code': 'BBN_178963',
  'location_name': 'Stationsplein',
  'street': 'Stationsplein',
  'city': 'Amsterdam',
  'house_number': '25',
  'house_number_add': '',
  'criteria': [],
  'distance': 370,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59107415,
  'lat': 52.37839758,
  'lng': 4.90078601,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH5822',
  'location_name': 'Albert Heijn',
  'street': 'Stationsplein',
  'city': 'AMSTERDAM',
  'house_number': '13',
  'house_number_add': '',
  'criteria': [],
  'distance': 402,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59112078,
  'lat': 52.37691108,
  'lng': 4.89774766,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10578251',
  'location_name': 'ATS BV',
  'street': 'Damrak',
  'city': 'Amsterdam',
  'house_number': '7',
  'house_number_add': '',
  'criteria': [],
  'distance': 439,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59107406,
  'lat': 52.38164639,
  'lng': 4.88883888,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH1425',
  'location_name': 'Albert Heijn',
  'street': 'Haarlemmerdijk',
  'city': 'AMSTERDAM',
  'house_number': '1',
  'house_number_add': '',
  'criteria': [],
  'distance': 514,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59107352,
  'lat': 52.37773777,
  'lng': 4.90207094,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH5607',
  'location_name': 'Albert Heijn',
  'street': 'Stationsplein',
  'city': 'AMSTERDAM',
  'house_number': '7',
  'house_number_add': '',
  'criteria': [],
  'distance': 516,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 64800}],
    'tuesday': [{'from': 32400, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 64800}],
    'thursday': [{'from': 25200, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 57600}],
    'saturday': [{'from': 25200, 'to': 57600}],
    'sunday': [{'from': 25200, 'to': 64800}],
  },
}, {
  'id': 59112276,
  'lat': 52.37609298,
  'lng': 4.89552448,
  'locationtype_id': 408,
  'icon_path': 'images/icon_pakketpunt en pakketautomaat.png',
  'location_code': '39316216441',
  'location_name': 'City Phone Internet',
  'street': 'Nieuwendijk',
  'city': 'AMSTERDAM',
  'house_number': '126',
  'house_number_add': 'H-S',
  'criteria': [],
  'distance': 521,
  'shop': '09.00-22.00',
  'collection': '12:00',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 57600}],
    'tuesday': [],
    'wednesday': [],
    'thursday': [{'from': 28800, 'to': 64800}],
    'friday': [{'from': 25200, 'to': 64800}],
    'saturday': [{'from': 32400, 'to': 61200}],
    'sunday': [],
  },
}, {
  'id': 59119712,
  'lat': 52.37591299,
  'lng': 4.89330896,
  'locationtype_id': 4,
  'icon_path': 'images/icon_brievenbus.png',
  'location_code': 'BBN_178970',
  'location_name': 'Nieuwezijds Voorburgwal',
  'street': 'Nieuwezijds Voorburgwal',
  'city': 'Amsterdam',
  'house_number': '55',
  'house_number_add': '',
  'criteria': [],
  'distance': 575,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 25200, 'to': 57600}],
    'tuesday': [],
    'wednesday': [],
    'thursday': [{'from': 32400, 'to': 61200}],
    'friday': [{'from': 25200, 'to': 57600}],
    'saturday': [{'from': 25200, 'to': 61200}],
    'sunday': [],
  },
}, {
  'id': 59110675,
  'lat': 52.38240604,
  'lng': 4.8878169,
  'locationtype_id': 404,
  'icon_path': 'images/icon_pakketpunt en pakketautomaat.png',
  'location_code': '36472209725',
  'location_name': 'L\'art Pour Vous',
  'street': 'Haarlemmerdijk',
  'city': 'Amsterdam',
  'house_number': '56',
  'house_number_add': '',
  'criteria': [],
  'distance': 602,
  'shop': '10.00-18.00',
  'collection': '17:30',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59110777,
  'lat': 52.37539736,
  'lng': 4.89466576,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10580824',
  'location_name': 'Kruidvat',
  'street': 'Nieuwendijk',
  'city': 'Amsterdam',
  'house_number': '160',
  'house_number_add': '',
  'criteria': [],
  'distance': 605,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59119723,
  'lat': 52.3822977,
  'lng': 4.88770062,
  'locationtype_id': 4,
  'icon_path': 'images/icon_brievenbus.png',
  'location_code': 'BBN_178984',
  'location_name': 'Haarlemmerdijk',
  'street': 'Haarlemmerdijk',
  'city': 'Amsterdam',
  'house_number': '55',
  'house_number_add': 'C',
  'criteria': [],
  'distance': 606,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 61200}],
    'tuesday': [{'from': 32400, 'to': 57600}],
    'wednesday': [{'from': 32400, 'to': 57600}],
    'thursday': [{'from': 25200, 'to': 57600}],
    'friday': [{'from': 32400, 'to': 57600}],
    'saturday': [{'from': 28800, 'to': 64800}],
    'sunday': [{'from': 25200, 'to': 64800}],
  },
}, {
  'id': 59113216,
  'lat': 52.38417945,
  'lng': 4.90366023,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10579105',
  'location_name': 'Starbed BV',
  'street': 'Badhuiskade',
  'city': 'Amsterdam',
  'house_number': '3',
  'house_number_add': '',
  'criteria': [],
  'distance': 629,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59119718,
  'lat': 52.38607607,
  'lng': 4.89282854,
  'locationtype_id': 4,
  'icon_path': 'images/icon_brievenbus.png',
  'location_code': 'BBN_178977',
  'location_name': 'Westerdoksdijk',
  'street': 'Westerdoksdijk',
  'city': 'Amsterdam',
  'house_number': '525',
  'house_number_add': '',
  'criteria': [],
  'distance': 636,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59107424,
  'lat': 52.38472581,
  'lng': 4.90319893,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH1879',
  'location_name': 'Albert Heijn',
  'street': 'Bercylaan',
  'city': 'AMSTERDAM',
  'house_number': '5',
  'house_number_add': '',
  'criteria': [],
  'distance': 644,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 25200, 'to': 64800}],
    'tuesday': [],
    'wednesday': [],
    'thursday': [{'from': 28800, 'to': 61200}],
    'friday': [{'from': 32400, 'to': 57600}],
    'saturday': [{'from': 25200, 'to': 57600}],
    'sunday': [],
  },
}, {
  'id': 59119728,
  'lat': 52.37750922,
  'lng': 4.88816576,
  'locationtype_id': 4,
  'icon_path': 'images/icon_brievenbus.png',
  'location_code': 'BBN_179000',
  'location_name': 'Keizersgracht',
  'street': 'Keizersgracht',
  'city': 'Amsterdam',
  'house_number': '95',
  'house_number_add': '',
  'criteria': [],
  'distance': 658,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 57600}],
    'tuesday': [],
    'wednesday': [],
    'thursday': [{'from': 28800, 'to': 61200}],
    'friday': [{'from': 32400, 'to': 61200}],
    'saturday': [{'from': 32400, 'to': 64800}],
    'sunday': [],
  },
}, {
  'id': 59107411,
  'lat': 52.3748462,
  'lng': 4.89396699,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH5614',
  'location_name': 'Albert Heijn',
  'street': 'Nieuwendijk',
  'city': 'AMSTERDAM',
  'house_number': '182',
  'house_number_add': '',
  'criteria': [],
  'distance': 675,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59112071,
  'lat': 52.37471429,
  'lng': 4.89900545,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10578239',
  'location_name': 'Old Bridge',
  'street': 'Oudezijds Voorburgwal',
  'city': 'Amsterdam',
  'house_number': '50',
  'house_number_add': 'winkel',
  'criteria': [],
  'distance': 696,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 25200, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 61200}],
    'thursday': [{'from': 25200, 'to': 64800}],
    'friday': [{'from': 25200, 'to': 64800}],
    'saturday': [{'from': 32400, 'to': 64800}],
    'sunday': [{'from': 32400, 'to': 64800}],
  },
}, {
  'id': 59106693,
  'lat': 52.37448038,
  'lng': 4.8967759,
  'locationtype_id': 404,
  'icon_path': 'images/icon_pakketpunt en pakketautomaat.png',
  'location_code': '38656214767',
  'location_name': 'SPAR city Warmoesstraat',
  'street': 'Warmoesstraat',
  'city': 'Amsterdam',
  'house_number': '98',
  'house_number_add': 'H',
  'criteria': [],
  'distance': 698,
  'shop': '08.00-22.00',
  'collection': '17:30',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59109136,
  'lat': 52.37587177,
  'lng': 4.90291374,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10579966',
  'location_name': 'Luxor Bazar V.O.F.',
  'street': 'Prins Hendrikkade',
  'city': 'Amsterdam',
  'house_number': '99',
  'house_number_add': 'B-G',
  'criteria': [],
  'distance': 705,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 64800}],
    'tuesday': [],
    'wednesday': [],
    'thursday': [{'from': 28800, 'to': 64800}],
    'friday': [{'from': 28800, 'to': 57600}],
    'saturday': [{'from': 32400, 'to': 64800}],
    'sunday': [],
  },
}, {
  'id': 59110433,
  'lat': 52.3748924,
  'lng': 4.89211614,
  'locationtype_id': 404,
  'icon_path': 'images/icon_pakketpunt en pakketautomaat.png',
  'location_code': '36489209753',
  'location_name': 'Donia Travel',
  'street': 'Nieuwezijds Voorburgwal',
  'city': 'Amsterdam',
  'house_number': '91',
  'house_number_add': '',
  'criteria': [],
  'distance': 710,
  'shop': '10.00-18.00',
  'collection': '17:30',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59108634,
  'lat': 52.37784404,
  'lng': 4.88657588,
  'locationtype_id': 404,
  'icon_path': 'images/icon_pakketpunt en pakketautomaat.png',
  'location_code': '37945213359',
  'location_name': 'Tabakszaak Scario',
  'street': 'Prinsenstraat',
  'city': 'Amsterdam',
  'house_number': '23',
  'house_number_add': 'C',
  'criteria': [],
  'distance': 733,
  'shop': '12.00-21.00',
  'collection': '17:30',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59119711,
  'lat': 52.37396183,
  'lng': 4.89526909,
  'locationtype_id': 4,
  'icon_path': 'images/icon_brievenbus.png',
  'location_code': 'BBN_178968',
  'location_name': 'Beursplein',
  'street': 'Beursplein',
  'city': 'Amsterdam',
  'house_number': '2',
  'house_number_add': '',
  'criteria': [],
  'distance': 758,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 25200, 'to': 61200}],
    'tuesday': [{'from': 25200, 'to': 61200}],
    'wednesday': [{'from': 25200, 'to': 57600}],
    'thursday': [{'from': 32400, 'to': 64800}],
    'friday': [{'from': 25200, 'to': 61200}],
    'saturday': [{'from': 25200, 'to': 61200}],
    'sunday': [{'from': 25200, 'to': 57600}],
  },
}, {
  'id': 59107412,
  'lat': 52.37393812,
  'lng': 4.89388898,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': 'AH5606',
  'location_name': 'Albert Heijn',
  'street': 'Damrak',
  'city': 'AMSTERDAM',
  'house_number': '89',
  'house_number_add': '',
  'criteria': [],
  'distance': 775,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 25200, 'to': 57600}],
    'tuesday': [{'from': 25200, 'to': 61200}],
    'wednesday': [{'from': 32400, 'to': 57600}],
    'thursday': [{'from': 32400, 'to': 57600}],
    'friday': [{'from': 32400, 'to': 61200}],
    'saturday': [{'from': 32400, 'to': 61200}],
    'sunday': [{'from': 25200, 'to': 61200}],
  },
}, {
  'id': 59119710,
  'lat': 52.37386597,
  'lng': 4.89816307,
  'locationtype_id': 4,
  'icon_path': 'images/icon_brievenbus.png',
  'location_code': 'BBN_178967',
  'location_name': 'Oudezijds Voorburgwal',
  'street': 'Oudezijds Voorburgwal',
  'city': 'Amsterdam',
  'house_number': '80',
  'house_number_add': '',
  'criteria': [],
  'distance': 776,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59112946,
  'lat': 52.38360883,
  'lng': 4.88532107,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10578013',
  'location_name': 'Tabaronde',
  'street': 'Haarlemmerdijk',
  'city': 'Amsterdam',
  'house_number': '141',
  'house_number_add': '',
  'criteria': [],
  'distance': 808,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
}, {
  'id': 59106022,
  'lat': 52.37337821,
  'lng': 4.89540773,
  'locationtype_id': 3,
  'icon_path': 'images/icon_postzegelverkoop.png',
  'location_code': '10579052',
  'location_name': 'Dirk van de Broek',
  'street': 'Warmoesstraat',
  'city': 'Amsterdam',
  'house_number': '157',
  'house_number_add': '-163',
  'criteria': [],
  'distance': 822,
  'shop': '',
  'collection': '',
  'openingHours': {
    'monday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'tuesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'wednesday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'thursday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'friday': [{'from': 28800, 'to': 43200}, {'from': 46800, 'to': 61200}],
    'saturday': [],
    'sunday': [],
  },
}, {
  'id': 59105172,
  'lat': 52.38055647,
  'lng': 4.88401909,
  'locationtype_id': 404,
  'icon_path': 'images/icon_pakketpunt en pakketautomaat.png',
  'location_code': '39081215835',
  'location_name': 'TOET Store B.V.',
  'street': 'Tweede Goudsbloemdwstr',
  'city': 'AMSTERDAM',
  'house_number': '20',
  'house_number_add': 'H',
  'criteria': [],
  'distance': 832,
  'shop': '12.00-18.00',
  'collection': '17:30',
  'openingHours': {
    'monday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'tuesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'wednesday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'thursday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'friday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'saturday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
    'sunday': [{'from': 32400, 'to': 43200}, {'from': 46800, 'to': 72000}],
  },
},
]