import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import NewsError from '../components/NewsError';
import NewsHeader from '../components/NewsHeader';
import NewsList from '../components/NewsList';
import NewsLoading from '../components/NewsLoading';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'reactnative';

const initialData = {
    loading: false,
    error: null,
    data: {
        hits: [],
        query: "",
    }
};

const NewsScreen = () => {
    const [news, setNews] = useState(initialData);
    const fetchNews = () => {
        setNews({
            ...news,
            loading: true,
            error: null,
        });

        axios.get(API + DEFAULT_QUERY)
            .then(result => {
                const obj = result.data;
                setNews({
                    ...news,
                    loading: false,
                    error: null,
                    data: {
                        hits: obj.hits,
                        query: obj.query
                    }
                });
            })
            .catch((error) => {
                setNews({
                    ...news,
                    loading: false,
                    error: error,
                    data: {},
                });
            });
    }
    useEffect(() => {
        fetchNews();
        return () => { }
    }, []);

    const { loading, error, data } = news;
    if (loading == true) {
        return (<View>
            <NewsLoading />
        </View>);
    } else {
        if (error) {
            return (<View>
                <NewsError message={error.message} />
            </View>);
        } else {
            const { query, hits } = data;
            return (<View>
                <NewsHeader query={query} />
                <NewsList hits={hits} />
            </View>);
        }
    }
};
export default NewsScreen;