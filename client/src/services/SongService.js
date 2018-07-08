import Api from '@/services/Api';

export default {
    index () {
        // return Api().post('songs');
        return [
            {
                value: false,
                title: 'Angel',
                artist: 'Massive Attack',
                album: 'Mezzanine'
            },
            {
                value: false,
                title: 'Horse With No Name',
                artist: 'America',
                album: 'Horse With No Name'
            },
            {
                value: false,
                title: 'I wanna Be Yours',
                artist: 'Arctic Monkeys',
                album: 'AM'
            },
            {
                value: false,
                title: 'Hello Again',
                artist: 'Amos Lee',
                album: 'Mission Bell'
            },
            {
                value: false,
                title: 'Lalena',
                artist: 'Deep Purple',
                album: 'Deep Purple'
            },
            {
                value: false,
                title: 'Soldier Of Fortune',
                artist: 'Deep Purple',
                album: 'Deep Purple'
            },
            {
                value: false,
                title: 'Ordinary Joe',
                artist: 'Terry Callier',
                album: 'Occasional Rain'
            },
            {
                value: false,
                title: 'Wake Up',
                artist: 'Mad Season',
                album: 'Above'
            },
            {
                value: false,
                title: 'Credence',
                artist: 'Opeth',
                album: 'My Arms Your Hearse'
            },
            {
                value: false,
                title: 'Hazard',
                artist: 'Richard Marx',
                album: 'Greatests Hits'
            }
        ];
    }
};
