#include <bits/stdc++.h>
using namespace std;

int main()
{
    int x;
    cin>>x; // take x as the no of steps can be taken
    int arr[x]; //in array arr store the value of steps like {1,3,5}
    for(int i=0;i<x;i++)
    {
        cin>>arr[i];  
    }
    long long int dp[100001]; // dp will store the possible ways to reach on each no of stair
    dp[0]=1;
    long long int m=100000007,total;
    for(int i=1;i<=100000;i++)
    {
        total=0;    // the total ways for each step
        for(int j=0;j<x;j++)
        {
            if(i-arr[j]>=0)   // check if possible to reach that stair in no of ways like {1,3,5}
            {
                total=(total+dp[i-arr[j]])%m; //perform modulus on each no as no can be very large
            }
        }
        dp[i]=total; // place value dp so that can be used to retrieve data
    }
    int t;
    cin>>t;  // take the no of test cases
    while(t--)
    {
        int n;
        cin>>n;
        cout<<dp[n]<<endl; //just look on the dp on unit place and retrieve the data
    }
    return 0;
}
