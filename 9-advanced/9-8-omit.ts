{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    type VideoMetaData = Omit<Video, 'url' | 'data'>

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'http://www.',
            data: 'byte-data...'
        }
    }

    function getVideoMetadata(id: string): VideoMetaData {
        return {
            id: 'id',
            title: 'vvi'
        }
    }
}