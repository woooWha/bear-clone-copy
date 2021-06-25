import dayjs from 'dayjs'

/*export const getCreatedAt = (date) => {
    // 현재 시간
    const now = dayjs();

    // 메모가 생성된 시간
    const createdAt = dayjs(date);

    const diffDate = Math.floor(now.diff(createdAt) / 1000);
    
    if (diffDate < 60) {
        return `${diffDate}초`
    } else if (60 >= diffDate < 3600) {
        return `${dayjs(diffDate, 'day')}분`
    }
};*/

export const getCreatedAt = (date) => {
    // 현재 시간
    const now = new Date().getTime();

    // 메모가 생성된 시간
    const createdAt = new Date(date).getTime();

    const diffDate = Math.floor((now - createdAt) / 1000);
    
    if (diffDate < 60) {
        return `${diffDate}초`
    } else if (60 < diffDate < 3600) {
        return `${Math.floor(diffDate/60)}분${diffDate%60}초`
    }
};


/*
인자로부터 받아오는 시간 (생성된 시간)
const createdAt = new Date().getTime();
// 현재 시간 
const now = new Date().getTime();

const diff = end - start;

const seconds = Math.floor((diff) / (1000));

console.log(seconds // 초)
*/