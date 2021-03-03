scss = css 전처리기 중 하나로 확장된 css 문법을 사용하여 css 코드를 더욱 쉽게 작성하게 해줌

styled-components = 스타일을 자바스크립트 파일에 내장시키는 방식 스타일을 작성함과 동시 해당 스타일이 적용된 컴포넌트 만들 수 있게 해 줍니다.

## css 정리

#### display 

- none = 화면에서 사라짐, 크기 자체도 차지하지 않음.

- block = div가 갖게되는 기본값 기본적으로 width가 자산의 컨테이너의 100%가 됨	

- inline = 컨텐츠를 딱 감쌀정도의 크기 갖게 됨, block 태그와 다르게 줄바꿈이 되지 않고 반드시 컨텐츠를 감싸게 되고, 크기 변화 불가능

- inline-block = 기본적으로 inline의 속성을 지니고 있지만, 임의 크기 변경 가능

### transition

문법 

```
transition: property timing-function duration delay | initial | inherit
```

 

- property : transition을 적용시킬 속성을 정합니다.

- timing-function : transition의 진행 속도를 정합니다.

- duration: transition의 총 시간을 정합니다.

- delay : transition의 시작을 연기합니다.

- initial : 기본값으로 설정합니다.

- inherit : 부모 요소의 속성값을 상속받습니다.

  