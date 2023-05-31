// 環境変数の型チェック
declare namespace NodeJS {
	interface ProcessEnv {
    	NEXT_PUBLIC_GITHUB_URL: string;
  	}
}