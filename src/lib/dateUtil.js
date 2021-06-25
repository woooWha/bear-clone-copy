import dayjs from 'dayjs'

export const getCreatedAt = (date) => {
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
};