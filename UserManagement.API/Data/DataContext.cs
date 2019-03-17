using Microsoft.EntityFrameworkCore;
using UserManagement.API.Model;

namespace UserManagement.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        public DbSet<Value> Values {get; set;}
    }
}