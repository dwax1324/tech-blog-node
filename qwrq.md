시간 제한 : 1초

메모리 제한 : 128MB







입력

첫째 줄에 참가자의 수 1 ≤ N ≤ 200, 예산 1 ≤ B ≤ 500000, 호텔의 수 1 ≤ H ≤ 18, 고를 수 있는 주의 개수 1 ≤ W ≤ 13이 주어진다. 다음 줄부터 각 호텔의 정보가 주어지며, 호텔의 정보는 두 줄로 이루어져 있다. 첫번째 줄에는 그 호텔의 일인당 숙박비용 1 ≤ p ≤ 10000이 주어지고, 둘째 줄에는 i번째 주에 투숙 가능한 인원 0 ≤ a ≤ 1000이 주어진다.







출력

첫째 줄에 대회를 개최할 수 있으면 최소 비용을 출력하고, 없으면 "stay home"을 출력한다.







소스코드

#include <iostream>
using namespace std;
int main(void)
{
	int n, b, h, w, min, p, sum = 0;
	cin >> n >> b >> h >> w;
	min = b + 1;
	for (int i = 0; i < h; i++)
	{
		cin >> p;
		sum = 0;
		for (int k = 0, tmp; k < w; k++)
		{
			cin >> tmp;
			if (tmp >= n)
				sum = p*n;
		}
		if (min > sum && sum != 0)
			min = sum;
	}
	if (min > b)
		cout << "stay home";
	else
		cout << min;
}






Tip

단순 구현 문제로, 최솟값을 구할 수 있는 경우 최솟값을 경신해주고 최솟값이 지불 가능한 비용보다 큰 지 판정하는 과정만 거치면 된다.



출처: https://twinparadox.tistory.com/362 [Twinparadox Factory]