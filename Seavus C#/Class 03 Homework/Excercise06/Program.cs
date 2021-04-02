using System;

namespace Excercise06
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] names = new string[100];

            char pass = 'y';
            for (int i = 1; pass == 'y' || pass == 'Y' && i<100; i++){
                Console.WriteLine("Enter a name:");
                string name = Console.ReadLine();

                names[i] = name;

                Console.WriteLine("Do you want to enter another name? (Y / N) (Any other input treated as N) ");
                string input = Console.ReadLine();
                bool val = char.TryParse(input, out char choice);
                if (!val) break;
                pass = choice;
            }

            foreach (string name in names) Console.Write(name + " ");
        }
    }
}
