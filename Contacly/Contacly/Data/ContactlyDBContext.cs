using Contacly.Models.Domain;
using Microsoft.EntityFrameworkCore;

namespace Contacly.Data
{
    public class ContactlyDBContext : DbContext
    {
        public ContactlyDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}
