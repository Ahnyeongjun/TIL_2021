#### 마운트 = DOM이 생성되고 웹 브라우저 상에 나타나는 것

컴포넌트가 업데이트 되는 상황 = props, state, 부모 컴포넌트, 강제로 렌더링하거나 바꿀 때

#### 컴포넌트 사이클 메서드

render() = 필수 메서드로 태그 혹은 따로 선언한 컴포넌트 등을 반환 할 수  있다.

constructor = 컴포넌트의 생성자 메서드

getDerivedStateFromProps = 컴포넌트가 업데이트 될 때 호출

componentDidMount = 첫 렌더링을 마친 후

shouldComponentUpdate = 리렌더링을 시작할지 여부 (boolean 값 필수)

getSanpshotBeforeUpdate = render에서 만들어진 결과물이 반영되기 직전

componentDidUpdate = 리렌더링을 완료한 후

componentWllUnmount = 컴포넌트 DOM에서 제거할 때 

componentDidCatch  = 랜더리 도중 에러발생 처리



#### Hooks

함수형 컴포넌트가 클래스형이 못하였던 state 관리, 라이플 사이클 api 등을 사용할 수 있게해줌.

useState = 가변적인 상태를 지닐 수 있게 해줌.

useEffect = 랜덜링될 때마다 특정 작업을 수행하도록 해줌.

useReducer = useState 보다 다양한 상태를 다른 값으로 업데이트 해줌.

useMemo = 연산 최적화

useCallback = 렌더링 성능을 최적화 	

useRef =  ref 사용 할 수 있음