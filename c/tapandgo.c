#include<stdio.h>
#include<string.h>
struct tapAndGoAccounts{
		float balance;
		char name[30];
		char sex[10];
		int age;
		int id;
};

struct routes{
		float price;
		char origin[30];
		char destination[30];
};
void loadMoney(float amount, struct tapAndGoAccounts *account){
	printf("Adding %f to  %s\'s account.......\n", amount, account->name);
	account->balance+=amount;
}
void addRoute(struct routes *route, float price,const char* origin,const char* destination){
	route->price=price;
	strcpy(route->origin,origin);
	strcpy(route->destination,destination);
}
void setAccountInfo(struct tapAndGoAccounts *account,const char* name, int age,const char* sex, int id){
	strcpy(account->name,name);
	account->age=age;
	strcpy(account->sex,sex);
	account->id=id;
	account->balance=0;
	printf("\n%s\'s account was sucessfuly edited\n", account->name);
}
void printAcountInfo(struct tapAndGoAccounts *account){
	printf("\n\n____________________________________\n");
	printf("\t%s  account  id %d", account->name, account->id);
	printf("\n_____________________________________\n");
	printf("\tage: %d \t %s", account->age, account->sex);
	printf("\n_____________________________________\n");
	printf("\tAccount balance: %f", account->balance);
	printf("\n_____________________________________\n\n");
}
void tap(const char* origin, const char* destination, struct tapAndGoAccounts *account,struct routes *route, int nroutes){
	//Finding the price for the destination
	printf("\n\n...................TAP......................\n");
	int i;
	float price=0;
	for(i=0;i<nroutes;i++){
		//check price 
		if(strcmp(origin , route->origin)==0 && strcmp(destination , route->destination)==0)
		price=route->price;
		else if( strcmp(destination , route->origin)==0 && strcmp(origin , route->destination)==0)
		price=route->price;
		route++;
	}
	printf("\nAccount balance\n");
	printf("_______________\n");
	if(price>0){
		if(account->balance<price){
			printAcountInfo(account);
			printf("Please recharge your account, you can not move from %s to %s\n\n\n", origin, destination);
		}
		else{
			account->balance-=price;
			printAcountInfo(account);
			printf("\n %s moved ... from %s to %s fee was %f\n\n\n", account->name, origin, destination, price);
			
		}
	}else{
		printf("\n Route was not found.\n");
	}
	
	
}
int main(){
	//Creating database of the routes and prices
	struct routes route[7];
	addRoute(&route[0],450, "Downtown", "Kimironko");
	addRoute(&route[1],650, "Kimironko", "Nyabugogo");
	addRoute(&route[2],760, "Nyabugogo", "Kagugu");
	addRoute(&route[3],800, "Kagugu", "Downtown");
	addRoute(&route[4],700, "Downtown", "Kicukiro");
	addRoute(&route[5],1000, "Kicukiro", "Nyamata");
	addRoute(&route[6],500, "Kicukiro", "Remera");

	//Creating the accout for the john smith tap and go
	struct tapAndGoAccounts account;
	setAccountInfo(&account, "John ", 25, "Male", 1 );
	//Loading money(5000) for John Smith account
	loadMoney(5000,&account);	

	//John smith goings
	tap("Downtown", "Kimironko", &account, route, 7);
	tap("Kimironko", "Nyabugogo", &account, route, 7);
	tap("Nyabugogo", "Kagugu", &account, route, 7);
	tap("Kagugu", "Downtown", &account, route, 7);
	tap("Kicukiro", "Nyamata", &account, route, 7);
	tap("Nyamata", "Kicukiro", &account, route, 7);
	tap("Kicukiro", "Remera", &account, route, 7);
    //He will rebe 
	return 0;
}