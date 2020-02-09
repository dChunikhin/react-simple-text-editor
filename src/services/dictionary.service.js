const EXTERNAL_ENDPOINT = 'https://api.datamuse.com/words';

class DictionaryService {

    constructor(endpoint) {
        this.url = endpoint;
    }

    getSynonymsForWord(word, limit = 25) {

        // limitation to work with only one selected word;
        word = word.split(' ')[0];

        if (word) {
            const SearchParams = `?ml=${word}`;
            return fetch(this.url + SearchParams)
                .then(response => response.json())
                .then(synonyms => synonyms
                    .filter((syn, i) => i < limit)
                    .map(syn => syn.word)
                )
                .catch(err => console.log(err) /* omitted for time sake */)
        }
        return [];
    }
}

export default new DictionaryService(EXTERNAL_ENDPOINT);

