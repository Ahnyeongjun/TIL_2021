## 코루틴 (출처 - https://medium.com/@limgyumin/%EC%BD%94%ED%8B%80%EB%A6%B0-%EC%BD%94%EB%A3%A8%ED%8B%B4%EC%9D%98-%EA%B8%B0%EC%B4%88-cac60d4d621b)

비동기 프로그래밍을 처리할 수 있다.

어떠한 작업을 foreground와 background 서로 쉽게 전환하면서 처리할 수 있다.

### 주요 핵심 키워드

#### corutinscope = 코루틴의 범위, 블록 묶음으로 제어 할  수 있는 단위

corutinecontext = 코루틴을 어떻게 처리 할 것인지에 대한 정보의 집합

- job
- dispatcher

job =  coroutines 상태를 가지고 있다.

![coroutine-job](https://thdev.tech/images/posts/2019/04/Init-Coroutines-Job/coroutine-job.png)

#### dispatcher = coroutineContext의 주요 요소

```
Dispatchers.Default : CPU 사용량이 많은 작업에 사용합니다. 주 스레드에서 작업하기에는 너무 긴 작업 들에게 알맞습니다.
Dispatchers.IO : 네트워크, 디스크 사용 할때 사용합니다. 파일 읽고, 쓰고, 소켓을 읽고, 쓰고 작업을 멈추는것에 최적화되어 있습니다.
```

 Dispatchers.Unconfined = 다른 dispatcher 과 달리 특정 스레드를 지정하지 않음.



#### launch and async 

launch() 함수로 시작된 코루틴 블록은 Job 객체를 반환함.

async() 함수로 시작된 코루틴 블록은 Deferred 객체를 반환함.



#### 지연 실행

launch 코루틴 블록과 async 코루틴 블록은 모두 처리시점 미룰 수있음

launch(start = courtinstart.lazy)

launch 코루틴 블록을 지연 실행 시킬 경우 Job 클래스 의 start() 함수 를 호출하거나 join() 함수를 호출하는 시점에 launch 코드 블록이 수행됨

지연된 async 코루틴 블록 의 경우 start() 함수는 async 코루틴 블록을 실행 시키지만 블록의 수행 결과를 반환하지 않습니다. 또한 await() 함수와 다르게 코루틴 블록이 완료 되는것을 기다리지 않음.

#### runBlocking()

 runBlocking() 함수로 시작된 블록은 아무런 추가 함수 호출 없이 해당 블록이 완료될때까지 기다릴수 있음.