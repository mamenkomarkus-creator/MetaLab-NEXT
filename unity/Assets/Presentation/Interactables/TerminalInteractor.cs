using UdonSharp;
using UnityEngine;
using VRC.SDKBase;
using VRC.Udon;

namespace MetaLab.Presentation.Interactables
{
    public class TerminalInteractor : UdonSharpBehaviour
    {
        [SerializeField] private string terminalName = "Головний сервер";

        // Метод викликається, коли гравець взаємодіє з колайдером об'єкта
        public override void Interact()
        {
            Networking.SetOwner(Networking.LocalPlayer, gameObject);
            ProcessInteraction();
        }

        private void ProcessInteraction()
        {
            // У майбутньому тут можна додати патерн Factory для різних типів терміналів,
            // а зараз просто перевіряємо працездатність Udon.
            Debug.Log($"[MetaLab] Взаємодія з {terminalName} ініційована гравцем {Networking.LocalPlayer.displayName}");
        }
    }
}