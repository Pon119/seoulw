import { useEffect } from "react";

const Map = () => {
    useEffect(() => {
        const kakaoMapScript = document.createElement('script')
        kakaoMapScript.async = false
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1d8f7e7e4b1f07adeff4054fb9568a0f&autoload=false`
        document.head.appendChild(kakaoMapScript)

        const onLoadKakaoAPI = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map')
                const options = {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                    level: 3,
                }

                // 1. 지도 띄우기
                const map = new kakao.maps.Map(container, options);

                // 2. 중앙에 핀 꽂기
                let marker = new kakao.maps.Marker({ 
                    map: map,
                    position: map.getCenter() 
                }); 

                // 3. 다른 핀 꽂기
                new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position:  new kakao.maps.LatLng(33.450936, 126.569477)
                });

                new kakao.maps.Marker({
                    map: map, // 마커를 표시할 지도
                    position:  new kakao.maps.LatLng(33.450879, 126.569940),
                    title: "종말의 지점"
                });


                // 4. 클릭 이벤트
                kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
                    // 클릭한 위도, 경도 정보를 가져옵니다 
                    const latlng = mouseEvent.latLng; 
                    
                    // 마커 위치를 클릭한 위치로 옮깁니다
                    marker.setPosition(latlng);
                    
                    let message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
                    message += '경도는 ' + latlng.getLng() + ' 입니다';
                    
                    const resultDiv = document.getElementById('clickLatlng'); 
                    resultDiv.innerHTML = message;
                });
            })
        }

        kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
    }, [])

    return (
        <>
            <div id="map" style={{ width: "90%", height: "350px" }}></div>
            <p><em>지도를 클릭해주세요!</em></p>
            <p>아니 이게 안나오는게 아니라면 이 글씨가 안나올리가 없잖아</p>
            <div id="clickLatlng"></div>
        </>
    )
}

export default Map;