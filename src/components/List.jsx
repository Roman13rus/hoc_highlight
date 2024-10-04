import Video from "./Video";
import Article from "./Article";
import HocFilter from "./HocFilter";

export default function List(props) {
    return props.list.map(item => {
        
        switch (item.type) {
            case 'video':
                const VideoHocFilter = HocFilter(Video)
                return (
                    <VideoHocFilter {...item} />
                );

            case 'article':
                const ArticleHocFilter = HocFilter(Article)
                return (
                    <Article {...item} />
                );
        }
    });
};