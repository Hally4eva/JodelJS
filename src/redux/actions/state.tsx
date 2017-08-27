import {PostListSortType} from '../../enums/PostListSortType';
import {Section} from '../../enums/Section';
import {IChannel} from '../../interfaces/IChannel';
import {IConfig} from '../../interfaces/IConfig';
import {IJodelAction} from '../../interfaces/IJodelAction';
import {INotification} from '../../interfaces/INotification';
import {IApiPost} from '../../interfaces/IPost';
import {IViewStateStore} from '../reducers/viewState';

export const SWITCH_POST_LIST_SORT_TYPE = 'SWITCH_POST_LIST_CONTAINER_STATE';

export function _switchPostListSortType(sortType: PostListSortType): IJodelAction {
    return {
        type: SWITCH_POST_LIST_SORT_TYPE,
        payload: {sortType},
    };
}

export const SWITCH_POST_SECTION = 'SWITCH_POST_SECTION';

export function _switchPostSection(section: Section): IJodelAction {
    return {
        type: SWITCH_POST_SECTION,
        payload: {section},
    };
}

export const SHOW_ADD_POST = 'SHOW_ADD_POST';

export function _showAddPost(visible: boolean): IJodelAction {
    return {
        type: SHOW_ADD_POST,
        payload: {visible},
    };
}

export const SHOW_SETTINGS = 'SHOW_SETTINGS';

export function _showSettings(visible: boolean): IJodelAction {
    return {
        type: SHOW_SETTINGS,
        payload: {visible},
    };
}

export const SHOW_CHANNEL_LIST = 'SHOW_CHANNEL_LIST';

export function _showChannelList(visible: boolean): IJodelAction {
    return {
        type: SHOW_CHANNEL_LIST,
        payload: {visible},
    };
}

export const SHOW_NOTIFICATIONS = 'SHOW_NOTIFICATIONS';

export function _showNotifications(visible: boolean): IJodelAction {
    return {
        type: SHOW_NOTIFICATIONS,
        payload: {visible},
    };
}

export const SHOW_SEARCH = 'SHOW_SEARCH';

export function _showSearch(visible: boolean): IJodelAction {
    return {
        type: SHOW_SEARCH,
        payload: {visible},
    };
}

export const REPLACE_VIEW_STATE = 'REPLACE_VIEW_STATE';

export function replaceViewState(newViewState: IViewStateStore): IJodelAction {
    return {
        type: REPLACE_VIEW_STATE,
        payload: {newViewState},
    };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function receivePosts(section: Section, postsBySortType: { [sortType: string]: IApiPost[] }, append = false): IJodelAction {
    const payload: { section: Section, postsBySortType: Array<{ sortType: PostListSortType, posts: string[] }>, entities: IApiPost[], append: boolean } = {
        section,
        postsBySortType: [],
        entities: [],
        append,
    };

    if (postsBySortType.recent !== undefined) {
        payload.entities = payload.entities.concat(postsBySortType.recent);
        payload.postsBySortType.push({
            sortType: PostListSortType.RECENT,
            posts: postsBySortType.recent.map(post => post.post_id),
        });
    }
    if (postsBySortType.discussed !== undefined) {
        payload.entities = payload.entities.concat(postsBySortType.discussed);
        payload.postsBySortType.push({
            sortType: PostListSortType.DISCUSSED,
            posts: postsBySortType.discussed.map(post => post.post_id),
        });
    }
    if (postsBySortType.popular !== undefined) {
        payload.entities = payload.entities.concat(postsBySortType.popular);
        payload.postsBySortType.push({
            sortType: PostListSortType.POPULAR,
            posts: postsBySortType.popular.map(post => post.post_id),
        });
    }
    return {
        type: RECEIVE_POSTS,
        receivedAt: Date.now(),
        payload,
    };
}

export function receivePost(post: IApiPost, append = false): IJodelAction {
    return {
        type: RECEIVE_POSTS,
        receivedAt: Date.now(),
        payload: {
            entities: [post],
            append,
        },
    };
}

export const RECEIVE_NOTIFICATIONS = 'RECEIVE_NOTIFICATIONS';

export function receiveNotifications(notifications: INotification[]): IJodelAction {
    return {
        type: RECEIVE_NOTIFICATIONS,
        receivedAt: Date.now(),
        payload: {
            notifications,
        },
    };
}

export const SET_NOTIFICATION_POST_READ = 'SET_NOTIFICATION_POST_READ';

export function _setNotificationPostRead(postId: string): IJodelAction {
    return {
        type: SET_NOTIFICATION_POST_READ,
        receivedAt: Date.now(),
        payload: {
            postId,
        },
    };
}

export const PINNED_POST = 'PINNED_POST';

export function pinnedPost(postId: string, pinned: boolean, pinCount: number): IJodelAction {
    return {
        type: PINNED_POST,
        payload: {
            postId,
            pinned,
            pinCount,
        },
    };
}

export const SELECT_POST = 'SELECT_POST';

export function _selectPost(postId: string | null): IJodelAction {
    return {
        type: SELECT_POST,
        payload: {postId},
    };
}

export const SELECT_PICTURE = 'SELECT_PICTURE';

export function _selectPicture(postId: string) {
    return {
        type: SELECT_PICTURE,
        payload: {postId},
    };
}


export const SET_KARMA = 'SET_KARMA';

export function _setKarma(karma: number): IJodelAction {
    return {
        type: SET_KARMA,
        payload: {karma},
        receivedAt: Date.now(),
    };
}

export const SET_CONFIG = 'SET_CONFIG';

export function _setConfig(config: IConfig): IJodelAction {
    return {
        type: SET_CONFIG,
        payload: {config},
        receivedAt: Date.now(),
    };
}

export const SET_RECOMMENDED_CHANNELS = 'SET_RECOMMENDED_CHANNELS';

export function setRecommendedChannels(recommendedChannels: IChannel[]): IJodelAction {
    return {
        type: SET_RECOMMENDED_CHANNELS,
        payload: {
            channelNames: recommendedChannels.map(c => c.channel),
            entitiesChannels: recommendedChannels,
        },
    };
}

export const SET_LOCAL_CHANNELS = 'SET_LOCAL_CHANNELS';

export function setLocalChannels(localChannels: IChannel[]): IJodelAction {
    return {
        type: SET_LOCAL_CHANNELS,
        payload: {
            channelNames: localChannels.map(c => c.channel),
            entitiesChannels: localChannels,
        },
    };
}

export const SET_CHANNELS_META = 'SET_CHANNELS_META';

export function setChannelsMeta(channels: IChannel[]): IJodelAction {
    return {
        type: SET_CHANNELS_META,
        payload: {
            entitiesChannels: channels,
        },
    };
}

export const SET_SUGGESTED_HASHTAGS = 'SET_LOCAL_CHANNELS';

export function setSuggestedHashtags(suggestedHashtags: string[]): IJodelAction {
    return {
        type: SET_LOCAL_CHANNELS,
        payload: {
            suggestedHashtags: suggestedHashtags,
        },
    };
}

export const SET_DEVICE_UID = 'SET_DEVICE_UID';

export function _setDeviceUID(deviceUid: string): IJodelAction {
    return {
        type: SET_DEVICE_UID,
        payload: {deviceUid},
    };
}

export const SET_PERMISSION_DENIED = 'SET_PERMISSION_DENIED';

export function _setPermissionDenied(permissionDenied: boolean): IJodelAction {
    return {
        type: SET_PERMISSION_DENIED,
        payload: {permissionDenied},
    };
}

export const SET_TOKEN = 'SET_TOKEN';

export function _setToken(distinctId: string, accessToken: string, refreshToken: string, expirationDate: number, tokenType: string): IJodelAction {
    return {
        type: SET_TOKEN,
        payload: {
            token: {
                distinctId,
                refresh: refreshToken,
                access: accessToken,
                expirationDate,
                type: tokenType,
            },
        },
    };
}

export const SET_LOCATION = 'SET_LOCATION';

export function _setLocation(latitude: number, longitude: number, city = '', country = 'DE'): IJodelAction {
    return {
        type: SET_LOCATION,
        receivedAt: Date.now(),
        payload: {
            location: {latitude, longitude, city, country},
        },
    };
}

export const SET_USE_BROWSER_LOCATION = 'SET_USE_BROWSER_LOCATION';

export function setUseBrowserLocation(useBrowserLocation: boolean): IJodelAction {
    return {
        type: SET_USE_BROWSER_LOCATION,
        receivedAt: Date.now(),
        payload: {
            useBrowserLocation,
        },
    };
}

export const SET_USE_HOME_LOCATION = 'SET_USE_HOME_LOCATION';

export function setUseHomeLocation(useHomeLocation: boolean): IJodelAction {
    return {
        type: SET_USE_HOME_LOCATION,
        receivedAt: Date.now(),
        payload: {
            useHomeLocation,
        },
    };
}

export const INVALIDATE_POSTS = 'INVALIDATE_POSTS';

export function invalidatePosts(section: Section): IJodelAction {
    return {
        type: INVALIDATE_POSTS,
        payload: {section},
    };
}

export const SET_IS_FETCHING = 'SET_IS_FETCHING';

export function setIsFetching(section: Section, isFetching = true): IJodelAction {
    return {
        type: SET_IS_FETCHING,
        payload: {
            section,
            isFetching,
        },
    };
}

export const SET_IMAGE_CAPTCHA = 'SET_IMAGE_CAPTCHA';

export function setImageCaptcha(key: string | null, imageUrl: string | null, imageWidth: number | null): IJodelAction {
    return {
        type: SET_IMAGE_CAPTCHA,
        payload: {
            key,
            imageUrl,
            imageWidth,
        },
    };
}
