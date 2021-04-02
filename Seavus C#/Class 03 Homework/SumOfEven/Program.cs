using System;

namespace SumOfEven
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] array = new int[6];
            int sum = 0;
            for (int i = 0; i < array.Length; i++)
            {
                Console.WriteLine("Enter integer no." + (i + 1));
                string input = Console.ReadLine();

                bool validParse = int.TryParse(input, out int number);

                if (!validParse)
                {
                    i--;
                    continue;
                }

                array[i] = number;
                if (number % 2 == 0) sum += number;
            }
            Console.WriteLine("The result is: " + sum);
        }
    }
}
